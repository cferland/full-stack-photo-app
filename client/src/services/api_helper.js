import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3001"
})

export const createPost = async (newPost) => {
  const resp = await api.post('/posts', newPost);
  return resp.data;
}

export const updatePost = async (id, updateData) => {
  const resp = await api.put(`/post/${id}`, updateData);
  return resp.data;
}

export const showPost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
}

export const showPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
}

export const deletePost = async (id) => {
  const resp = await api.delete(`posts/${id}`);
  return resp.data;
}

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/auth/register', registerData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return false;
}