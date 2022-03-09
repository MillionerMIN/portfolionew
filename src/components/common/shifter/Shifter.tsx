import './shifter.scss';

import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

import useAnimScroll from '../../../hooks/useAnimScroll/AnimScroll';

const Shifter = () => {
  const [theme, setTheme] = useState<string>('dark');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const icons =
    theme === 'light' ? (
      <FontAwesomeIcon icon={faMoon} />
    ) : (
      <FontAwesomeIcon icon={faLightbulb} />
    );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useAnimScroll();
  return (
    <div className='shifter anim-item anim-no-hide' onClick={toggleTheme}>
      <div className='shifter--link'>{icons}</div>
    </div>
  );
};

export default Shifter;
