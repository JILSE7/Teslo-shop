import { ResponseProducts } from 'interfaces';
import useSWR, { SWRConfiguration } from 'swr'
import { IProduct } from '../interfaces/Products';

// const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json())

export const useProducts = (url: string, config: SWRConfiguration = {}) => {
  // const { data, error } = useSWR<ResponseProducts>(`/api/${url}`, fetcher, config);
  const { data, error } = useSWR<ResponseProducts>(`/api/${url}`, config);
  const isLoading = !data && !error;
  return {data, isLoading ,error}
}