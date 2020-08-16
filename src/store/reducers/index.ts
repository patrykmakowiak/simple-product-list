import { combineReducers } from 'redux';

import products from './productsReducer';
import basket from './basketReducer';

const allReducers = combineReducers({
  products,
  basket,
});

export type RootState = ReturnType<typeof allReducers>;
export default allReducers;
