import { useEffect, useRef, useState } from "react";

// useIntersectionObserver 훅 정의, 기본 rootMargin 값은 "0px"
export function useIntersectionObserver(
  rootMargin: string = "0px"
): [React.RefObject<HTMLDivElement>, boolean] {
  // isIntersecting 상태 변수 선언, 초기값은 false
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  // ref 변수를 useRef로 선언, 초기값은 null
  const ref = useRef<HTMLDivElement>(null);

  // 컴포넌트가 마운트될 때와 rootMargin이 변경될 때 실행
  useEffect(() => {
    // IntersectionObserver 인스턴스 생성, 콜백 함수와 옵션 설정
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry가 뷰포트에 교차하는지 여부에 따라 isIntersecting 상태 업데이트
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    // 현재 ref가 가리키는 DOM 요소 가져오기
    const currentElement = ref.current;
    if (currentElement) {
      // 요소 관찰 시작
      observer.observe(currentElement);
    }

    // 컴포넌트가 언마운트되거나 rootMargin이 변경될 때 observer 연결 해제
    return () => {
      if (currentElement) {
        observer.disconnect();
      }
    };
  }, [rootMargin]); // 의존성 배열에 rootMargin 포함

  // ref와 isIntersecting 상태 반환
  return [ref, isIntersecting];
}
