import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const setToken = token => {
    if (token) {
        return instance.defaults.headers.authorization = `Bearer ${token}`
    }
    return instance.defaults.headers.authorization = '';
}

export const registere = async (data) => {
    const { data: result } = await instance.post('register', data);
    setToken(result.token)
    return result;
}

export const logine = async (data) => {
    const { data: result } = await instance.post('/login', data)
    setToken(result.token);
    return result;
}

export const logoute = async () => {
    const { data } = await instance.post('/logout');
    setToken()
    return data;
}

export const currente = async token => {
    try {
        setToken(token)
        const { data } = await instance.get('/current')
        return data;
    } catch (error) {
        setToken();
        throw error;
    }
}