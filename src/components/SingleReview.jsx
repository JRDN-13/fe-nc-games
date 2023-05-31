import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../Api";
import { useState, useEffect } from "react";

function SingleReview() {
  const [currentReview, setCurrentReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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

  return (
    <div className="single-review-card">
      <h2>{currentReview.title}</h2>
      <img
        className=""
        src={currentReview.review_img_url}
        alt={currentReview.title}
      />
      <p>
        Designed by <em>{currentReview.designer}</em>
      </p>
      <p>{currentReview.owner}</p>
      <p>{currentReview.review_body}</p>
      <p>{currentReview.votes}</p>
    </div>
  );
}

export default SingleReview;
