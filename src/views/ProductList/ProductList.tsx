import React from 'react';

import './ProductList.scss';
import Product from '../../components/Product/Product';
import useProducts from './useProducts';

const ProductList = () => {
  const { products } = useProducts();

  return (
    <div className="product-list">
      {products.map(({
        id, title, currency, images, prices,
      }) => (
        <Product
          key={id}
          title={title}
          currency={currency}
          images={images}
          prices={prices}
        />
      ))}
    </div>
  );
};

export default ProductList;
