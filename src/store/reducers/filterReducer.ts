import {
  ACTIVE_FILTER,
  DEACTIVE_FILTER,
} from '../actions/actionsType';

const initialState = {
  activeColors: [],
};

type Color = string;
type InitialState = {
  activeColors: Color[];
}
type Payload = {
  name: string;
}
type Action = {
  type: string;
  payload: Payload;
};

const filterReducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case ACTIVE_FILTER: {
      const copyActiveColors = [...state.activeColors];
      copyActiveColors.push(action.payload.name);
      return {
        ...state,
        activeColors: copyActiveColors,
      };
    }
    case DEACTIVE_FILTER: {
      const indexfilterToRemove = state.activeColors.findIndex((color) => color === action.payload.name);
      const copyActiveColors = [...state.activeColors];
      copyActiveColors.splice(indexfilterToRemove, 1);
      return {
        ...state,
        activeColors: copyActiveColors,
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
