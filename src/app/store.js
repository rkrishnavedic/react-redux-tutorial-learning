import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState, 
  applyMiddleware(...middleware)
);
