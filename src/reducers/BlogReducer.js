import { FETCH_BLOG_ERROR, FETCH_BLOG_REQUEST, FETCH_BLOG_SUCCESS } from "../action/types";

  export const INITIAL_STATE = {
    blog: [],
  };
  
const BlogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_BLOG_REQUEST:
        console.log("FETCH_BLOG_REQUEST", action);
        return {
          ...state,
        };
  
      case  FETCH_BLOG_SUCCESS:
        console.log("FETCH_BLOG_SUCCESS", action);
        return {
          ...state,
          blog: action.dataUsers,
        };
      case FETCH_BLOG_ERROR:
        console.log("FETCH_BLOG_ERROR", action);
        return {
          ...state,
        };
  
      default:
        return state;
    }
  };
  
  export default BlogReducer;
  