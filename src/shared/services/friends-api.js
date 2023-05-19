import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getAllFriend =async()=>{
  const { data } = await instance.get('/friends')
  console.log('friends api', data);
   return data
  
 }