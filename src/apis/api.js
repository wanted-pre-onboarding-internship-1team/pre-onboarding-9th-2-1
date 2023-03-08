import axios from 'axios';

export const getProduct = async () => {
  try {
    return await axios.get(
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T131950Z&X-Amz-Expires=86400&X-Amz-Signature=2560095c6f42248cc56233520cdb3a4fbc23c40452ca05b39eeea850705f3ec7&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject'
    );
  } catch (error) {
    throw new Error(error);
  }
};
