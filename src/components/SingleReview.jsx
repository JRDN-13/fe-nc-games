import { useParams } from "react-router-dom";
import {
  fetchCommentsByReviewId,
  fetchReviewsById,
  increaseVote,
} from "../Api";
import { useState, useEffect } from "react";
import Comments from "./Comments";

function SingleReview() {
  const [currentReview, setCurrentReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentComments, setCurrentComments] = useState([]);
  const [nocomment, setNocomment] = useState("");
  const [errMsg, setErrMsg] = useState("")
  const { review_id } = useParams();
  const [voteChange, setVoteChange] = useState(currentReview.votes);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    fetchReviewsById(review_id).then(({ review }) => {
      setCurrentReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  function handleClick() {
    fetchCommentsByReviewId(review_id).then((results) => {
      if (results.comments.length === 0) setNocomment("No comments");
      setCurrentComments(results.comments);
    });
  }

  const handleUpVoteClick = () => {
    setVoteChange((currVote) => currVote + 1);
    if (hasClicked === false) setErrMsg("Only 1 vote allowed!")
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
      });
  };

  const handleDownVoteClick = () => {
    setVoteChange((currVote) => currVote - 1);
    if (hasClicked === false) setErrMsg("Only 1 vote allowed!")
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
      <p>{currentReview.review_body}</p>
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
        {errMsg && <p className="err">{errMsg}</p>}
      <button onClick={handleClick}>Click to view comment(s)</button>
      {nocomment && <p>{nocomment}</p>}
      {currentComments.map((comment) => (
        <Comments comment={comment} key={comment.comment_id} />
      ))}
    </section>
  );
}

export default SingleReview;
