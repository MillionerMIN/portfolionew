import './navButton.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <h2 className={isActive ? 'nav-button--title' : 'nav-button--title-none'}>
        {name}
      </h2>
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
