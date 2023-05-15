import axios from 'axios';
import { toast } from 'react-toastify';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const searchPetByQuery = async query => {
  try {
    const response = await instance.get(`/notices?query=$(query)`);
    const responseData = response.data.results;
    return responseData;
  } catch (error) {
    toast.error(error.message);
  }
};
