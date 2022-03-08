import { useEffect } from 'react';

function useAnimScroll() {
  useEffect(() => {
    const animItems = document.querySelectorAll('.anim-item');
    if (animItems.length > 0) {
      const animOnScroll = () => {
        for (let index = 0; index < animItems.length; index++) {
          const animItem = animItems[index];
          const animItemHeight = animItem.clientHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;

          let animItemPoint = window.innerHeight - animItemHeight / animStart;
          if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
          }

          if (
            scrollY > animItemOffset - animItemPoint &&
            scrollY < animItemOffset + animItemHeight
          ) {
            animItem.classList.add('_active');
          } else {
            if (!animItem.classList.contains('anim-no-hide')) {
              animItem.classList.remove('_active');
            }
          }
        }
      };

      const offset = (el: HTMLElement | Element) => {
        const rect = el.getBoundingClientRect();
        const scrollT = document.documentElement.scrollLeft;
        const scrollL = document.documentElement.scrollTop;

        return { top: rect.top + scrollT, left: rect.left + scrollL };
      };
      window.addEventListener('scroll', animOnScroll);

      setTimeout(() => {
        animOnScroll();
      }, 500);
    }
  }, []);
}

export default useAnimScroll;
