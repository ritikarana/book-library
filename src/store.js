import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/index";
/** IMPORT REDUCER */

const middleware = composeWithDevTools(applyMiddleware(promise(), thunk));
/** MAP STORE WITH REDUCERS AND MIDDLEWARE */
export default createStore(rootReducer, middleware);
