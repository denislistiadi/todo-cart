import { IAuthRequest } from '../types/auth.types';
import { postServices } from './api.service';

export const loginApi = async (data: IAuthRequest) => {
  const { username, password } = data;
  const response = await postServices(LOGIN, { username, password });
  return response;
};
