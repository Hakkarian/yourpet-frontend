import axios from 'axios';

const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: process.env.REACT_APP_API_URL || 'https://barkend.onrender.com/api',
});

export const getAllFriend = async () => {
  const { data } = await instance.get('/friends');

  return data;
};
