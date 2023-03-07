import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useTravelProducts() {
  const {
    data: { data },
  } = useQuery(['products'], () => axios.get('data/products.json'), {});
  console.log(123);
  console.log(data);
  return 1;
}
