import React from 'react';

const PostItem = (props) => {
  // console.log(props);
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
