import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import configureStore from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducers,
  productListReducers,
} from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";
import {
  userDetailsReducers,
  userLoginReducers,
  userRegisterReducers,
} from "./reducers/userReducers";
import { orderCreateReducer, orderDetailsReducer, orderListMyReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  cart: cartReducers,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
  userDetails: userDetailsReducers,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderListMy: orderListMyReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
