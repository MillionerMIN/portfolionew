import './nav.scss';

import {
  faBriefcase,
  faEnvelopeOpen,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import NavButton from '../common/button/NavButton';

const itemsNav = [
  { name: 'Home', icon: faHome, href: '/' },
  { name: 'About', icon: faUser, href: '/about' },
  { name: 'Portfolio', icon: faBriefcase, href: '/portfolio' },
  { name: 'Contact', icon: faEnvelopeOpen, href: '/contact' },
];

const Nav = () => {
  const [selected, setSelected] = useState<string>('Home');

  const selectHandler = (name: string) => {
    setSelected(name);
  };

  const elements = itemsNav.map((item, index) => {
    return (
      <NavButton
        key={index}
        data={item}
        onChange={selectHandler}
        selected={selected}
      />
    );
  });
  return <nav className='nav nav-position nav-mr'>{elements}</nav>;
};

export default Nav;
