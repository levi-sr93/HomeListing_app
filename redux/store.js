import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import houseReducer from "./reducers/houseReducer";

const rootReducer = combineReducers({
  house: houseReducer,
});

//for handle async operations
const middleware = composeWithDevTools(applyMiddleware(thunk));

//creating store
export default createStore(rootReducer, middleware);
