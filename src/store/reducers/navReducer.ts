import {
  TOOGLE_NAV,
} from '../actions/actionsType';

type Payload = {
  name: string;
}
type Action = {
  type: string;
  payload: Payload;
};

const navReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case TOOGLE_NAV: {
      return !state;
    }
    default:
      return state;
  }
};

export default navReducer;
