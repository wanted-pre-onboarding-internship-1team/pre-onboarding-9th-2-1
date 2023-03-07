import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useTravelProducts() {
  const {
    data: { data },
  } = useQuery(['products'], () => axios.get('data/products.json'), {
    suspense: true,
  });

  return data;
}
