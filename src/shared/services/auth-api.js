import axios from 'axios';

// export const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL
// });

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  return (instance.defaults.headers.authorization = '');
};

export const setAuthHeader = token => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const registere = async thing => {
  console.log('here api')
  const {data: result} = await instance.post('/auth/register', thing);
  return result;
};

export const logine = async data => {
  const { data: result } = await instance.post('/auth/login', data);
  console.log('log api', result)
  setToken(result.token);
  return result;
};

export const logoute = async () => {
  const { data } = await instance.post('/user/logout');
  setToken();
  return data;
};

export const infoService = async data => {
  const { data: result } = await instance.patch('/user/info', data);
  console.log('here info api')
  console.log('info api', result)
  setToken(result.token);
  return result;
};

export const refreshUserService = async data => {
  setToken(data);
  const { data: result } = await instance.get('/user/current');
  console.log('here refresh api')
  console.log('refresh api', result)
  return result;
};
