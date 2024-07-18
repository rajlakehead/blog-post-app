import React from 'react';

const PostDetail = ({ post }) => {
  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
