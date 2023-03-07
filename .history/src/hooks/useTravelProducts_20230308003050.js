import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useTravelProducts() {
  const data = useQuery(['products'], () => axios.get('data/products.json'));
  console.log(data);
  return 1;
}
