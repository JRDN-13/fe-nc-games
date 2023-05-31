import React from "react";

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

  return (
    <ul className="reviews-card" key={review_id}>
      <li>
        <h2>{title}</h2>
        <img className="reviews-image" src={review_img_url} alt={title} />
        <section className="reviews-details">
          <p>
            Designed by <em>{designer}</em>
          </p>
          <p>OWNER: {owner}</p>
          <p>VOTES: {votes}</p>
          <p>{comment_count} comment(s)</p>
        </section>
      </li>
    </ul>
  );
}

export default ReviewsCard;
