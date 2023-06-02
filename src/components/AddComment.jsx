import { useState } from "react";
import { postComment } from "../Api";
import { useParams } from "react-router-dom";

const AddComment = ({ setComments }) => {
  const { review_id } = useParams();
  const [newComment, setNewComment] = useState({
    username: "",
    body: "",
  });
  const [usernameBlankCommentErr, setUsernameBlankCommentErr] = useState(false);
  const [usernameCommentErr, setUsernameCommentErr] = useState(false);
  const [bodyCommentErr, setBodyCommentErr] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);
  const [isError, setIsError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsernameBlankCommentErr(false);
    setUsernameCommentErr(false);
    setBodyCommentErr(false);
    setPostSuccess(!setPostSuccess);

    const { username, body } = newComment;

    if (username.trim().length === 0) {
      setUsernameBlankCommentErr(true);
    } else if (!isValidUsername(username)) {
      setUsernameCommentErr(true);
    }

    if (body.trim().length === 0) {
      setBodyCommentErr(true);
    } else if (
      !usernameBlankCommentErr &&
      !usernameCommentErr &&
      !bodyCommentErr
    ) {
      postComment(review_id, newComment)
        .then((commentFromAPI) => {
          setComments((currComment) => [...currComment, commentFromAPI]);
          setPostSuccess(true);
        })
        .catch(() => {
          setIsError(true);
        });
    }
    setNewComment({
      username: "",
      body: "",
    });
  };

  const isValidUsername = (username) => {
    const validUsernames = [
      "tickle122",
      "grumpy19",
      "happyamy2016",
      "cooljmessy",
      "weegembump",
      "jessjelly",
    ];
    return validUsernames.includes(username);
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
      {isError ? (
        <p className="err">
          Something went wrong! please refresh and try again
        </p>
      ) : null}
      {usernameBlankCommentErr && (
        <p className="err">Username cannot be empty</p>
      )}

      {usernameCommentErr && <p className="err">Invalid username</p>}
      {bodyCommentErr && <p className="err">Comment field cannot be empty</p>}
      {!postSuccess ? null : <p className="success">Post added</p>}
      <button>Add</button>
    </form>
  );
};

export default AddComment;
