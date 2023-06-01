import React from "react";
import { Link } from "react-router-dom";

function ReviewsCard({ review }) {
  const { review_id, review_img_url, title, designer, category } = review;

  return (
    <ul className="reviews-card" key={review_id}>
      <Link to={`reviews/${review_id}`}>
        <h3>{title}</h3>
        <img className="reviews-image" src={review_img_url} alt={title} />
      </Link>
      <section className="reviews-details">
        <p>
          Designed by <em>{designer}</em>
        </p>
        <p>category: {category}</p>
      </section>
    </ul>
  );
}

export default ReviewsCard;
