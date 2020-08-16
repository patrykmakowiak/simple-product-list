import React from 'react';

import './Nav.scss';
import NavItem from '../NavItem/NavItem';
import { routes } from '../../constants/routes';

const Nav = () => (
  <nav>
    <ul className="list">
      {routes.map(({ href, name }) => <NavItem key={href} href={href} name={name} />)}
    </ul>
  </nav>
);

export default Nav;
