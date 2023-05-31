import axios from "axios";

const gamesApi = axios.create({
    baseURL: `https://nc-games-d42i.onrender.com/api/`,
  });

export function fetchReviews() {
    return gamesApi.get(`reviews`).then((results) => {
        return results
    })
}

export function fetchReviewsById(review_id) {
    return gamesApi.get(`reviews/${review_id}`).then((results) => {
        return results.data
    })
}