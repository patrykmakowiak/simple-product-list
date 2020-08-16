import {
  LOAD_FETCHED_PRODUCTS,
} from '../actions/actionsType';
import { Products } from '../../types';

const initialState = {
  loading: true,
  error: false,
  products: [],
};

type InitialState = {
  loading: boolean;
  error: boolean;
  products: Products;
}

type Payload = {
  products: Products;
}

type Action = {
  type: string;
  payload: Payload;
};

const productsReducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case LOAD_FETCHED_PRODUCTS: {
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
