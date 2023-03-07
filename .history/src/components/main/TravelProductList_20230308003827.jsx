import useTravelProducts from '../../hooks/useTravelProducts';

export default function TravelProductList() {
  const data = useTravelProducts();
  console.log(data);
  return <div>1</div>;
}
