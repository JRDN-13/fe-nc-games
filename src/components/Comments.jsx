import React from "react";

function Comments({ comment }) {
  const { author, body, created_at} = comment;
  console.log(comment,"comment")
  console.log(comment.comment_id,"comment_id")

  return (
    <section className="comment-container">
      <p>
        {body}{" "}
        <span className="author-text">
          {" "}
          <em>
            {author} {new Date(created_at).toLocaleTimeString()}{" "}
            {new Date(created_at).toLocaleDateString()}
          </em>
        </span>
      </p>
    </section>
  );
}

export default Comments;
