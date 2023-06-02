import { useParams } from "react-router-dom";
import {
  fetchCommentsByReviewId,
  fetchReviewsById,
  increaseVote,
} from "../Api";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import AddComment from "./AddComment";

function SingleReview() {
  const [currentReview, setCurrentReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentComments, setCurrentComments] = useState([]);
  const [nocomment, setNocomment] = useState("");
  const [isError, setIsError] = useState(null);
  const { review_id } = useParams();
  const [voteChange, setVoteChange] = useState(currentReview.votes);
  const [hasClicked, setHasClicked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    fetchReviewsById(review_id).then(({ review }) => {
      setCurrentReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  function handleClick() {
    fetchCommentsByReviewId(review_id).then((results) => {
      if (results.comments.length === 0) setNocomment("No comments");
      setCurrentComments(results.comments);
      setShowComments(!showComments);
    });
  }

  const handleUpVoteClick = () => {
    setHasClicked(true);
    increaseVote(review_id, 1)
      .then(() => {
        setCurrentReview((preReview) => ({
          ...preReview,
          votes: preReview.votes + 1,
        }));
      })
      .catch(() => {
        setVoteChange((currVote) => currVote - 1);
        setIsError(true);
      });
  };

  const handleDownVoteClick = () => {
    setVoteChange((currVote) => currVote - 1);

    setHasClicked(true);
    increaseVote(review_id, -1)
      .then(() => {
        setCurrentReview((preReview) => ({
          ...preReview,
          votes: preReview.votes - 1,
        }));
      })
      .catch(() => {
        setVoteChange((currVote) => currVote + 1);
        setIsError(true);
      });
  };

  return (
    <section className="single-review-card">
      <h2>{currentReview.title}</h2>
      <img
        className="single-review-card-img"
        src={currentReview.review_img_url}
        alt={currentReview.title}
      />
      <h3>REVIEW</h3>
      <blockquote className="blockquote">
        {currentReview.review_body}
      </blockquote>
      <p>
        by <em>{currentReview.owner}</em>
      </p>
      <section className="votes-container">
        <button
          className="vote-btn"
          onClick={handleUpVoteClick}
          disabled={hasClicked}
        >
          ▲
        </button>{" "}
        {currentReview.votes} vote(s)
        <button
          className="vote-btn"
          onClick={handleDownVoteClick}
          disabled={hasClicked}
        >
          ▼
        </button>
      </section>
      {isError ? (
        <p className="err">
          Something went wrong! please refresh and try again
        </p>
      ) : null}
      <button onClick={handleClick}>
        {showComments ? "Click to hide comment(s)" : "Click to view comment(s)"}
      </button>

      {showComments && (
        <>
          {nocomment && <p>{nocomment}</p>}
          {currentComments.map((comment) => (
            <Comments comment={comment} key={comment.comment_id} />
          ))}
        </>
      )}
      <h4>Add a comment below</h4>
      <AddComment setComments={setCurrentComments} />
    </section>
  );
}

export default SingleReview;
