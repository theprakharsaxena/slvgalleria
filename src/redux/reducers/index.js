import { combineReducers } from "redux";
import userReducer from "../slice/userSlice";
import cartReducer from "../slice/cartSlice";
import shopFilterReducer from "../slice/shopFilterSlice";
import adminReducer from "../slice/adminSlice";

const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  cart: cartReducer,
  shopFilter: shopFilterReducer,
});

export default rootReducer;
