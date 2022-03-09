import './navButton.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const NavButton = (props: NavButtonType) => {
  const { selected } = props;
  const { name, icon, href } = props.data;
  const [isActive, setIsActive] = useState<boolean>(false);

  const isSelected = selected === href ? 'nav-button-selected' : '';
  return (
    <Link
      className={`nav-button ${isSelected}`}
      to={href}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <FontAwesomeIcon icon={icon} />
      <CSSTransition
        in={isActive}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: 'nav-button--title-show',
          enterDone: 'nav-button--title-done',
          exitActive: 'nav-button--title-hide',
        }}
      >
        <h2 className='nav-button--title'>{name}</h2>
      </CSSTransition>
    </Link>
  );
};

type NavButtonType = {
  key?: number;
  data: {
    name: string;
    icon: any;
    href: string;
  };
  selected: string;
};

export default NavButton;
