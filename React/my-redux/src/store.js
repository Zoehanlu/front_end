import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

const initialState = {};
const middleware = [thunk];   //中间件
export const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));