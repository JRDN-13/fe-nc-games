import { useParams } from "react-router-dom";
import { fetchCommentsByReviewId, fetchReviewsById } from "../Api";
import { useState, useEffect } from "react";

function SingleReview() {
  const [currentReview, setCurrentReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentComments, setCurrentComments] = useState([]);
  const { review_id } = useParams();

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
      console.log(results.comments);
      setCurrentComments(results.comments);
    });
  }

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
        <button>△</button> {currentReview.votes} vote(s)
        <button>▽</button>
      </section>
      <button onClick={handleClick}>Click to view comment(s)</button>
      {currentComments.map((comment) => (
        <section key={comment.comment_id}>
          <p>
            {comment.body}
            <span className="author-text">
              by{" "}
              <em>
                {comment.author}{" "}
                {new Date(comment.created_at).toLocaleTimeString()}{" "}
                {new Date(comment.created_at).toLocaleDateString()}
              </em>
            </span>
          </p>
        </section>
      ))}
    </section>
  );
}

export default SingleReview;
