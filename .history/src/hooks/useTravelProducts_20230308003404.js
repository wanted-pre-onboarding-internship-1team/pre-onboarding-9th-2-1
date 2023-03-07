import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const queryConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
};

export default function useTravelProducts() {
  const data = useQuery(['products'], () => axios.get('data/products.json'));
  console.log(data);
  return 1;
}
