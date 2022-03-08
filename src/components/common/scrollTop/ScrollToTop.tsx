import './scrollUpTop.scss';

import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <div>
        <CSSTransition
          in={isVisible}
          timeout={500}
          mountOnEnter
          unmountOnExit
          classNames={{
            enterActive: 'scroll_up-show',
            enterDone: 'scroll_up-enter-done',
            exitActive: 'scroll_up-hide',
          }}
        >
          <div onClick={scrollToTop} className='scroll_up'>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        </CSSTransition>
      </div>
    </>
  );
}
