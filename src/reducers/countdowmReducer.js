import { START_TIMER, STOP_TIMER, RESET_TIMER, TICK } from "../action/types";
const initialState = {
  isRunning: false,
  seconds: 0,
};

const countdowmReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return { ...state, isRunning: true };
    case STOP_TIMER:
      return { ...state, isRunning: false };
    case RESET_TIMER:
      return { ...state, seconds: 0 };
    case TICK:
      return { ...state, seconds: state.seconds + 1 };
    default:
      return state;
  }
};

export default countdowmReducer;
