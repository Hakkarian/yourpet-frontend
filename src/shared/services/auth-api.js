import axios from 'axios';

export const instance = axios.create({
  baseURL: 'localhost:3030/api',
});

export const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  return (instance.defaults.headers.authorization = '');
};

export const registere = async data => {
  const { data: result } = await instance.post('/auth/register', data);
  setToken(result.token);
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
  const { data: result } = await instance.patch('/user/info', data);
  setToken(result.token);
  return result;
};

export const refreshUserService = async data => {
  const { data: result } = await instance.get('/user/current', data);
  setToken(result.token);
  return result;
};