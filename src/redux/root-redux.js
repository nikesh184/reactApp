import {combineReducers} from "redux";

import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.Reducer'
export default combineReducers({
    user : userReducer,
    cart : CartReducer
});