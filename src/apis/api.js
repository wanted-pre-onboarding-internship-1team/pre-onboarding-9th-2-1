import axios from 'axios';

export const getProduct = async () => {
  try {
    return await axios.get(
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T230640Z&X-Amz-Expires=86400&X-Amz-Signature=92b115eb33fe5a5015e21ee7e5fedb0614e1cae3efae521fe3b767ad94238156&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject'
    );
  } catch (error) {
    throw new Error(error);
  }
};
