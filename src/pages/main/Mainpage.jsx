import Nav from '../../components/common/Nav';
import Products from '../../components/main/Products';
import React, { useEffect, useState } from 'react';

export default function Mainpage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230307T112038Z&X-Amz-Expires=86400&X-Amz-Signature=09f0d28f85123cc96388863ceca077c1639b4ec38f60f9f373f415483a0b4b04&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject'
    )
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  }, []);
  return (
    <>
      <Nav />
      <Products products={data} />
    </>
  );
}
