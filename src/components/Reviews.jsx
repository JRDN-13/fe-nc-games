import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchReviews } from "../Api";

function Reviews() {
  const [currentReviews, setCurrentReviews] = useState([]);

  useEffect(() => {
    fetchReviews().then(({ data }) => {
      console.log(data.reviews);
      setCurrentReviews(data.reviews);
    });
  }, []);

  return (
    <main>
      <ul className="reviewCard">
        {currentReviews.map((review) => (
          <li key={review.id}>
            <img className="reviewImage" src={review.review_img_url} alt={review.title} />
            <ul>
              <li>TITLE: {review.title}</li>
              <li>DESIGNER: {review.designer}</li>
              <li>OWNER: {review.owner}</li>
              <li>VOTES: {review.votes}</li>
              <li>COMMENTS: {review.comment_count}</li>
            </ul>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Reviews;
