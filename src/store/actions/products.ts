import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../reducers';
import { API } from '../../api';
import { Products } from '../../types';
import { LOAD_FETCHED_PRODUCTS } from './actionsType';

export const loadFeatchedProducts = (products: Products) => ({
  type: LOAD_FETCHED_PRODUCTS,
  payload: { products },
});

export const fetchProducts = ():
  ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  const products = await API.fetchProducts();
  dispatch(loadFeatchedProducts(products));
};
