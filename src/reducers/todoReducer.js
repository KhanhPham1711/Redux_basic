import { INCREMENT, DECREMENT, SET_JOB, ADD_JOB } from "../action/types";

export const INITIAL_STATE = {
  job: "",
  jobs: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };

    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
