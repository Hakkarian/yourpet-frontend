import { instance } from './auth-api';

// instance.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjNkNzdlZDI0MWU1M2YyNWM0Y2ZjYiIsImlhdCI6MTY4NDI2NDg0MCwiZXhwIjoxNjg2ODU2ODQwfQ.QriSZSrYZ-Fj-QJKL2GJqCPmN4i2BG-x1bBNwiSBy9Y`;

export const addPet = async data => {
  const { data: result } = await instance.post('/pets', data);
  return result;
};

export const fetchPets = async () => {
  try {
    const { data } = await instance.get('/pets');
    return data;
  } catch (error) {
    console.error('Failed to get pets', error.message);
  }
};