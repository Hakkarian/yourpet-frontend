import axios from 'axios';
console.log(process.env.REACT_APP_API_URL);
export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
  // baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
    if (token) {
        return instance.defaults.headers.authorization = `Bearer ${token}`
    }
    return instance.defaults.headers.authorization = "";
}

export const signup = async (data) => {
  const { data: result } = await instance.post("/users/register", data);
  setToken(result.token);
  return result;
}

export const signin = async (data) => {
    const { data: result } = await instance.post("/users/login", data)
    setToken(result.token)
    return result
}

export const logout = async () => {
    const {data} = await instance.post(`/users/logout`);
    setToken()
    return data;
}

export const checkState = async token => {
  try {
    setToken(token);
      const { data } = await instance.get(`/users/current`);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

// {
//   "user": {
//     "name": "tomos10",
//     "email": "tomos10@gmail.com"
//   },
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA5YTQzMDhiM2IzYjAwMTRkNGQzMjUiLCJpYXQiOjE2NzgzNjczNDF9.ekhuvKoOXeOQKyr4g8F6dsiSTXk1FKW0ydqjWcp3G90"
// } "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA5YzU2ODhiM2IzYjAwMTRkNGQzZTMiLCJpYXQiOjE2NzgzNjc0ODN9.N_NeGzv8C2xfXwtFHRN-Wxixv_Z1Jr7hm3GmbvBV0ug"