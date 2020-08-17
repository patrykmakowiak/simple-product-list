/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import { toogleNav } from '../../store/actions/nav';
import { RootState } from '../../store/reducers';
import './Hamburger.scss';

type Props = {
  color: 'white' | 'black';
}

const Hamburger = ({ color }: Props) => {
  const dispatch = useDispatch();
  const handleOpenMenu = () => dispatch(toogleNav());
  const isOpen = useSelector((state: RootState) => state.nav);

  return (
    <div
      onClick={handleOpenMenu}
      className={cx('hamburger', {
        'hamburger--close': isOpen,
      })}
    >
      <div className="hamburger__box">
        <div className={cx('hamburger__inner', {
          'hamburger__inner--black': color === 'black',
          'hamburger__inner--white': color === 'white',
        })}
        />
      </div>
    </div>
  );
};

export default Hamburger;
