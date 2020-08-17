import React from 'react';
import { useSelector } from 'react-redux';

import './ShoppingCart.scss';
import shoppingCart from '../../assets/images/icons/shopping-cart.svg';
import { RootState } from '../../store/reducers';

const ShoppingCart = () => {
  const { counter } = useSelector((state: RootState) => state.basket);

  return (
    <div className="shopping-cart">
      {!!counter && (<div className="shopping-cart__value">{counter}</div>)}
      <img className="shopping-cart__img" src={shoppingCart} alt="Shopping Cart" />
    </div>
  );
};

export default ShoppingCart;
