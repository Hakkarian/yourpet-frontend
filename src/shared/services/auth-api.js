import axios from 'axios';

// export const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL
// });

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: process.env.REACT_APP_API_URL || 'https://barkend.onrender.com/api',
});

export const setToken = token => {
  // if (token) {
  return (instance.defaults.headers.authorization = `Bearer ${token}`);
  // }
  // return (instance.defaults.headers.authorization = '');
};

export const setAuthHeader = token => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const registere = async thing => {
  const { data: result } = await instance.post('/auth/register', thing);
  return result;
};

export const logine = async data => {
  const { data: result } = await instance.post('/auth/login', data);
  setToken(result.token);
  return result;
};

export const logoute = async () => {
  const { data } = await instance.post('/user/logout');
  setToken();
  return data;
};

export const infoService = async data => {
  try {
    const { data: result } = await instance.patch('/user/info', data);
    console.log('here info api');
    console.log('user api result', result);
    // setAuthHeader(result.token);
    return result;
  } catch (error) {
    return error.message;
  }
};

export const getUserInfoService = async data => {
  const { data: result } = await instance.get('/user/current', data);
  // console.log('here user');
  // console.log('user api result', result)
  // setAuthHeader(result.token);
  return result;
};

export const refreshUserService = async data => {
  setToken(data);
  const { data: result } = await instance.get('/user/current');
  return result;
};
