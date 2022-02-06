import './shifter.scss';

import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

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

  return (
    <div className='shifter' onClick={toggleTheme}>
      <div className='shifter--link'>{icons}</div>
    </div>
  );
};

export default Shifter;
