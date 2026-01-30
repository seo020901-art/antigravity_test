/**
 * 포트폴리오 웹사이트 상호작용 스크립트
 * - 스크롤 애니메이션 (Intersection Observer)
 * - 네비게이션 스무스 스크롤
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initSmoothScroll();
});

/**
 * 스크롤 시 요소가 화면에 나타날 때 페이드 인 효과를 주는 함수
 */
const initScrollAnimations = () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // 한 번만 애니메이션 실행
            }
        });
    }, observerOptions);

    // data-aos 속성을 가진 모든 요소와 섹션 제목들을 관찰 대상으로 설정
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in-section');
        observer.observe(el);
    });
};

/**
 * 네비게이션 링크 클릭 시 부드럽게 스크롤 이동하는 함수
 */
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};
