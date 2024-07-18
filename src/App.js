// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import PostDetail from './components/PostDetails';
import { fetchPosts, createPost, deletePost } from './services/api';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);


  useEffect(() => {
    fetchPosts(page)
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch posts');
        setLoading(false);
      });
  }, [page]);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleClosePostDetail = () => {
    setSelectedPost(null);
  };


  const handleCreatePost = async (newPost) => {
    try {
      const createdPost = await createPost(newPost);
      setPosts([createdPost, ...posts]);
    } catch (err) {
      setError('Failed to create post');
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter(post => post.id !== id));
    } catch (err) {
      setError('Failed to delete post');
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <Header />
      <CreatePost onCreatePost={handleCreatePost} />
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {selectedPost ? (
          <PostDetail post={selectedPost} onClose={handleClosePostDetail} />
        ) : (
          <PostList 
            posts={filteredPosts} 
            onDeletePost={handleDeletePost}
            onPostClick={handlePostClick}
          />
        )}
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default App;