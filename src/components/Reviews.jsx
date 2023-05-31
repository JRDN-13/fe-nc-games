import React, { useEffect, useState } from "react";
import { fetchReviews } from "../Api";

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
      {currentReviews.map(
        ({
          review_id,
          review_img_url,
          title,
          designer,
          owner,
          votes,
          comment_count,
        }) => (
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
        )
      )}
    </main>
  );
}

export default Reviews;
