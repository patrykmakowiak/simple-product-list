import {
  ADD_PRODUCT_TO_BASKET,
} from '../actions/actionsType';

type InitialState = {
  counter: number;
};

type Action = {
  type: string;
};

const initialState = {
  counter: 0,
};

const productsReducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET: {
      return {
        counter: state.counter + 1,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
