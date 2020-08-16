import React from 'react';

import './NavItem.scss';

type Props = {
  href: string;
  name: string;
}

const NavItem = ({ href, name }: Props) => (
  <li>
    <a className="link" href={href}>{name}</a>
  </li>
);

export default NavItem;
