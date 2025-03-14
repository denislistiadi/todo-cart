import axios from 'axios';
import { BASE_URL } from '../constants/config';
import { IAuthResponse } from '../types/auth.types';

const ApiService = axios.create({
  baseURL: BASE_URL,
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error.response.data;
  }
);
ApiService.interceptors.request.use(
  (config) => {
    const auth: any = localStorage.getItem('auth');
    const parse: IAuthResponse | null = auth ? JSON.parse(auth) : null;

    if (parse?.accessToken || parse?.accessToken !== 'null') {
      config.headers['Authorization'] = `${parse?.accessToken}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

const getServices = async (url: string) => {
  const response = await ApiService.get(url);
  return response.data;
};

const postServices = async (url: string, data: any) => {
  const response = await ApiService.post(url, data);
  return response.data;
};

export { getServices, postServices };
