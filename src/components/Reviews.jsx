import React, { useEffect, useState } from "react";
import { fetchReviews } from "../Api";
import ReviewsCard from "./ReviewsCard";

function Reviews() {
  const [currentReviews, setCurrentReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviews().then(({ data }) => {
      setCurrentReviews(data.reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="reviews-container">
      {currentReviews.map((review) => (
        <ReviewsCard review={review} key={review.review_id} />
      ))}
    </main>
  );
}

export default Reviews;
