import { TOGGLE_SWITCH } from "../action/types";

const INITIAL_STATE = {
  toogle: false,
};

const toggle_switch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toogle: !state.toogle,
      };
    default:
      return state;
  }
};
export default toggle_switch;
