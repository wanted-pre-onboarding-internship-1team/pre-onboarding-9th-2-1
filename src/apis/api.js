import axios from 'axios';

export async function ReadData() {
  const { data } = await axios.get(
    'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230307T110338Z&X-Amz-Expires=86400&X-Amz-Signature=2f39d52cfbc2ac6d5cb84504c814d9c0282f34fa2e05e7a4e71a10eb704b8135&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject'
  );
  return data;
}
