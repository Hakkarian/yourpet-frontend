import axios from 'axios';

// export const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_URL
// });

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: process.env.REACT_APP_API_URL || 'https://barkend.onrender.com/api',
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
  const { data: result } = await instance.post('/auth/register', thing);
  return result;
};

export const logine = async data => {
  const { data: result } = await instance.post('/auth/login', data);
  setToken(result.token);
  return result;
};

export const google = async data => {
  console.log('before api google');
  const { data: result } = await instance.get('/google/callback');
  console.log('after api google');
  console.log(result)
  return result;
}
export const logoute = async () => {
  const { data } = await instance.post('/user/logout');
  setToken();
  return data;
};

export const infoService = async data => {
  const { data: result } = await instance.patch('/user/info', data);
  return result;
};

export const getUserInfoService = async data => {
  const { data: result } = await instance.get('/user/current', data);
  return result;
};

export const refreshUserService = async data => {
  setToken(data);
  console.log('here api current')
  const { data: result } = await instance.get('/user/current');
  console.log('auth api current', result)
  return result;
};
