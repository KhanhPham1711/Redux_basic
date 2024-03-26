import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import counterReducer from "./counterReducer";
import toggle_switch from "./ToogleRecuder";
import countdowmReducer from "./countdowmReducer";
import userReducer from "./userReducer";
import ProductReduce from "./ProductReduce";

const rootReducer = combineReducers({
  todos: todoReducer, // Đặt tên đúng cho reducer của todos
  counter: counterReducer,
  toogle: toggle_switch,
  countdown: countdowmReducer,
  user: userReducer,
  products: ProductReduce,
});
export default rootReducer;
