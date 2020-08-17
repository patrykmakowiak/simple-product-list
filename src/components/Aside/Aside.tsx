import React from 'react';

import './Aside.scss';

type Props = {
  children: React.ReactNode;
};

const Aside = ({ children }: Props) => (
  <aside>
    {children}
  </aside>
);

export default Aside;
