import { createStore, combineReducers, applyMiddleware } from 'redux';
import {
    middleware
} from '../middleware';

import {
    btreeReducer
} from '../reducers';

const middlewareCall = applyMiddleware(...middleware);

const store = createStore(btreeReducer, middlewareCall);

export default store;