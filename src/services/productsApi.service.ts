import { PRODUCTS } from '../constants/config';
import { getServices } from './api.service';
import useSWR from 'swr';

export const useGetProducts = () => {
  const { data, error } = useSWR(PRODUCTS, getServices);

  return {
    data,
    error,
    loading: !data && !error,
  };
};
