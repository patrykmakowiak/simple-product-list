import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './Product.scss';
import { Images, Prices } from '../../types';
import { addToBasket } from '../../store/actions/basket';
import Button from '../Button/Button';
import sale from '../../assets/images/icons/sale.svg';

type Props = {
  title: string;
  currency: string
  images: Images;
  prices: Prices;
};

const Product = ({
  title, currency, images, prices,
}: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleOnClick = () => dispatch(addToBasket());

  return (
    <div className="product">
      <img
        className="img"
        src={`${process.env.REACT_APP_API_URL}${images.thumbnail}`}
        alt={title}
      />
      <div className="product-button-wrapper">
        <Button handleOnClick={handleOnClick}>
          {t('Product.AddToCart')}
        </Button>
        {prices.after_discount && (
        <img
          className="product-sale-icon"
          src={sale}
          alt="Sale"
        />
        )}
      </div>
      <div className="produduct-title">{title}</div>
      <div className="product-price-wrapper">
        <div className={`${prices.after_discount ? 'product-after-discount' : 'product-price'}`}>
          {currency}
          {prices.base}
        </div>
        {prices.after_discount && (
        <div className="product-price">
          {currency}
          {prices.after_discount}
        </div>
        )}
      </div>
    </div>
  );
};

export default Product;
