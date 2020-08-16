import { combineReducers } from 'redux';

import products from './productsReducer';
import basket from './basketReducer';
import filter from './filterReducer';

const allReducers = combineReducers({
  products,
  basket,
  filter,
});

export type RootState = ReturnType<typeof allReducers>;
export default allReducers;
