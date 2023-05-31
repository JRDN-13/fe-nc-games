import React from "react";
import { Link } from "react-router-dom";

function ReviewsCard({ review }) {
  const {
    review_id,
    review_img_url,
    title,
    designer,
    owner,
    votes,
    comment_count,
  } = review;

  function handleClick() {
    setCurrentReviews();
  }

  return (
    <ul className="reviews-card" key={review_id}>
      <Link to={`reviews/${review.review_id}`}>
        <h3>{title}</h3>
        <img className="reviews-image" src={review_img_url} alt={title} onClick={handleClick}/>
      </Link>
        <section className="reviews-details">
          <p>
            Designed by <em>{designer}</em>
          </p>
          <p>OWNER: {owner}</p>
          <p>VOTES: {votes}</p>
          <p>{comment_count} comment(s)</p>
        </section>
    </ul>
  );
}

export default ReviewsCard;
