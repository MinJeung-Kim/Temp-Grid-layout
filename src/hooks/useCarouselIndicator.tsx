import { useEffect, useRef, useState } from "react";

export function useCarouselIndicator(
  options: IntersectionObserverInit
): [React.RefObject<HTMLDivElement>, boolean[]] {
  const [intersectingStates, setIntersectingStates] = useState<boolean[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // 상태 배열을 생성합니다.
      const states = entries.map((entry) => entry.isIntersecting);
      // 한 번에 모든 상태를 업데이트 합니다.
      setIntersectingStates(states);
    }, options);

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.disconnect();
      }
    };
  }, [options]);

  return [ref, intersectingStates];
}
