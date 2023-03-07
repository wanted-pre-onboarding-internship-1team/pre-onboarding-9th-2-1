const SERVER_URL =
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230307T115255Z&X-Amz-Expires=86400&X-Amz-Signature=6495add71f02bdb5883ed2a46bf7292808541ce1cec25be44b9cb9e354f9bfcc&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject';

const getProducts = async () => {
  const response = await fetch(SERVER_URL);
  if (response.status === 200) {
    const products = await response.json();
    return products;
  } else {
    throw new Error('서버 오류');
  }
};

export default getProducts;
