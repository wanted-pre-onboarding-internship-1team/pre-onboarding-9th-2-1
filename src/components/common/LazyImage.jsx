import { Image, Skeleton } from '@chakra-ui/react';
import React, { useState, useRef, useEffect, useCallback } from 'react';

/**
 * lazy loading image component
 * 늦은 로딩으로 뷰포트에 포함된 이미지만 URL에서 이미지를 가져와 보여준다.
 */
function LazyImage(props) {
  const [isShown, setIsShown] = useState(false);
  const skeletonRef = useRef();

  const intersectionObserverCallback = useCallback((entries, io) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 관찰되고 있는 entry가 보여지게 된 다면
        io.unobserve(entry.target); // 관찰 종료
        setIsShown(true); // 로드 시작
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionObserverCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    });
    skeletonRef.current && observer.observe(skeletonRef.current);
  }, [intersectionObserverCallback]);

  if (isShown) {
    return <Image {...props} objectFit='cover' ratio={1} borderRadius='lg' />;
  }
  return <Skeleton ref={skeletonRef} width={props?.width} />;
}

export default LazyImage;
