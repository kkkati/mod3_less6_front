import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import {
  userReducer,
  usersReducer,
  requestReducer,
  requestsReducer,
  appReducer,
} from "./reducers";

const reducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  request: requestReducer,
  requests: requestsReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
