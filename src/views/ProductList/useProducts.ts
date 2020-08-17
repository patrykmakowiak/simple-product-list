import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../../store/actions/products';
import { RootState } from '../../store/reducers';

const useProducts = () => {
  const dispatch = useDispatch();
  const { activeColors } = useSelector((state: RootState) => state.filter);
  const { products } = useSelector((state: RootState) => state.products);

  const filtredProducts = activeColors.length ? products
    .filter((product) => activeColors.includes(product.attributes.colors))
    : products;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return { products: filtredProducts };
};

export default useProducts;
