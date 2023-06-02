import axios from "axios";

const gamesApi = axios.create({
  baseURL: `https://nc-games-d42i.onrender.com/api/`,
});

export function fetchReviews() {
  return gamesApi.get(`reviews`).then((results) => {
    return results;
  });
}

export function fetchReviewsById(review_id) {
  return gamesApi.get(`reviews/${review_id}`).then((results) => {
    return results.data;
  });
}

export function fetchCommentsByReviewId(review_id) {
  return gamesApi.get(`reviews/${review_id}/comments`).then((results) => {
    return results.data;
  });
}

export function increaseVote(review_id, inc_votes) {
  return gamesApi.patch(`reviews/${review_id}`, { inc_votes: inc_votes });
}

export function postComment(review_id, newComment) {
  return gamesApi
    .post(`reviews/${review_id}/comments`, newComment)
    .then((results) => {
      console.log(results.data)
      return results.data.comment;
    });
}
