/**
 * localStorage에서 originProductList를 가져오는 hook
 */
export default function useOriginProduct() {
  const originProduct =
    JSON.parse(localStorage.getItem('originProductList')) || [];
  return originProduct;
}
