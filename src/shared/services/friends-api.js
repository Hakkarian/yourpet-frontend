import axios from "axios";

const instance = axios.create({
  baseURL: 'https://barkend.onrender.com/api',
});

export const getAllFriend =async()=>{
   const {data}= await instance.get('/friends')
   return data
  
 }