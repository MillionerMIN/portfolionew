import './nav.scss';

import {
  faBriefcase,
  faEnvelopeOpen,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

import NavButton from '../common/nav-button/NavButton';

const itemsNav = [
  { name: 'Home', icon: faHome, href: '/' },
  { name: 'About', icon: faUser, href: '/about' },
  { name: 'Portfolio', icon: faBriefcase, href: '/portfolio' },
  { name: 'Contact', icon: faEnvelopeOpen, href: '/contact' },
];

const Nav = () => {
  const { pathname } = useLocation();

  const elements = itemsNav.map((item, index) => {
    return <NavButton key={index} data={item} selected={pathname} />;
  });
  return <nav className='nav nav-position nav-mr'>{elements}</nav>;
};

export default Nav;
