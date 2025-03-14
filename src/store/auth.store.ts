import { create } from 'zustand';
import { IAuthResponse } from '../types/auth.types';

export interface IAuthStore {
  auth: IAuthResponse | null;
  onAuthChange: (auth: IAuthResponse | null) => void;
}

const dataAuth = localStorage.getItem('auth');

const useAuth = create<IAuthStore>((set) => ({
  auth: dataAuth ? JSON.parse(dataAuth) : null,
  onAuthChange: (auth: IAuthResponse | null) => set({ auth }),
}));

export default useAuth;
