import { combineReducers } from 'redux';

import products from './productsReducer';
import basket from './basketReducer';
import filter from './filterReducer';
import nav from './navReducer';

const allReducers = combineReducers({
  products,
  basket,
  filter,
  nav,
});

export type RootState = ReturnType<typeof allReducers>;
export default allReducers;
