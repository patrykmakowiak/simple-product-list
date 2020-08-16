import React from 'react';

import './Button.scss';

type Props = {
  children: React.ReactNode;
  handleOnClick: () => void;
};

const Button = ({ children, handleOnClick }: Props) => (
  <button
    onClick={handleOnClick}
    className="button"
    type="button"
  >
    {children}
  </button>
);

export default Button;
