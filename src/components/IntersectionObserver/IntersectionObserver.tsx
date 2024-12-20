import { useEffect } from "react";
// useIntersectionObserver 훅을 임포트
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
// CSS 모듈을 임포트
import styles from "./styles.module.css";

// IntersectionObserver 컴포넌트 정의
export default function IntersectionObserver() {
  // useIntersectionObserver 훅을 호출하여 ref와 isIntersecting 값을 반환받음, rootMargin은 "-300px"로 설정
  const [ref, isIntersecting] = useIntersectionObserver("-300px");

  // isIntersecting 또는 ref가 변경될 때마다 실행
  useEffect(() => {
    // ref가 현재 참조하는 요소가 있는지 확인
    if (ref.current) {
      // 해당 요소의 모든 자식 div 요소를 선택
      const children = ref.current.querySelectorAll("div");
      // 각 자식 요소에 대해 처리
      for (const el of children) {
        // isIntersecting 값에 따라 styles.slide_in 클래스를 토글
        el.classList.toggle(styles.slide_in, isIntersecting);
      }
    }
  }, [isIntersecting, ref]); // 의존성 배열에 isIntersecting과 ref 포함

  // 컴포넌트 렌더링
  return (
    <div className={styles.app}>
      <header className={styles.header}>This is the Header</header>
      <main ref={ref}>
        <div className={styles.child_one}>Child One</div>
        <div className={styles.child_two}>Child Two</div>
      </main>
      <footer className={styles.footer}>This is the Footer</footer>
    </div>
  );
}
