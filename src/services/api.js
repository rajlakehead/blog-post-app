// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/posts`, post);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }

};

export const deletePost = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/posts/${id}`);
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  };