import axios from 'axios';

const api = axios.create({
//   baseURL: "http://immense-stream-80916.herokuapp.com/"
  //put heroku link here after deploying when ready
  baseURL: "https://boiling-sierra-74418.herokuapp.com/"
})

export const createPost = async (newPost) => {
  const resp = await api.post('/posts', newPost);
  return resp.data;
}

export const updatePost = async (id, updateData) => {
  const resp = await api.put(`/posts/${id}`, updateData);
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
  console.log(token);
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return false;
}


export const createComment = async (id, newComment) => {
  const resp = await api.post(`/posts/${id}/comments`, newComment);
  return resp.data;
}

export const deleteComment = async (postId, id) => {
  const resp = await api.delete(`posts/${postId}/comments/${id}`);
  return resp.data;
}

export const showComments = async (id) => {
  const resp = await api.get(`/posts/${id}/comments`);
  return resp.data;
}