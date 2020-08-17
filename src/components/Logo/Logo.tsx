import React from 'react';

import logo from '../../assets/images/logo.svg';
import './Logo.scss';

const Logo = () => (
  <div className="logo">
    <img className="logo__img" src={logo} alt="Panda Group" />
  </div>
);

export default Logo;
