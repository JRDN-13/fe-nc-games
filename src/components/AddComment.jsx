import { useState } from "react";
import { postComment } from "../Api";
import { useParams } from "react-router-dom";

const AddComment = ({ setComments }) => {
  const { review_id } = useParams();
  const [newComment, setNewComment] = useState({
    username: "",
    body: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    postComment(review_id, newComment).then((commentFromAPI) => {
      setComments((currComment) => [...currComment, commentFromAPI]);
    });
  };

  return (
    <form className="addComment" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={newComment.username}
        placeholder="i.e Joe Bloggs"
        onChange={(event) => {
          setNewComment({ ...newComment, username: event.target.value });
        }}
      />
      <label htmlFor="body">Comment</label>
      <textarea
        id="body"
        value={newComment.body}
        rows="5"
        placeholder="Add your comment here..."
        onChange={(event) => {
          setNewComment({ ...newComment, body: event.target.value });
        }}
      ></textarea>
      <button>Add</button>
    </form>
  );
};

export default AddComment;
