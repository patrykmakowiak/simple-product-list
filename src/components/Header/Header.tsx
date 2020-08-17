import React from 'react';

import Hamburger from '../Hamburger/Hamburger';
import Logo from '../Logo/Logo';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './Header.scss';

const Header = () => (
  <div className="header">
    <Hamburger color="black" />
    <Logo />
    <ShoppingCart />
  </div>
);

export default Header;
