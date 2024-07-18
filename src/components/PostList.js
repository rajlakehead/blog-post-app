// src/components/PostList.js
import React from 'react';

const PostList = ({ posts, onDeletePost, onPostClick }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post.id} className="post-item" onClick={() => onPostClick(post)}>
          <h2>{post.title}</h2>
          <p>{post.body.substring(0, 100)}...</p>
          <button onClick={() => onDeletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;