import React, { useState } from 'react';

const CreatePost = ({ onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreatePost({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;