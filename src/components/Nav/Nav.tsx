import React from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import { RootState } from '../../store/reducers';
import './Nav.scss';
import NavItem from '../NavItem/NavItem';
import Hamburger from '../Hamburger/Hamburger';
import { routes } from '../../constants/routes';

const Nav = () => {
  const isOpen = useSelector((state: RootState) => state.nav);

  return (
    <nav
      className={cx('nav', {
        'nav--active': isOpen,
      })}
    >
      <div className="nav__wrapper">
        <Hamburger color="white" />
      </div>
      <ul className="nav__list">
        {routes.map(({ href, name }) => <NavItem key={href} href={href} name={name} />)}
      </ul>
    </nav>
  );
};

export default Nav;
