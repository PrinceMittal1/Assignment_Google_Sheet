import {legacy_createStore, combineReducers} from 'redux'
import MyReducer from './Reducers';

export const MyStore = legacy_createStore(MyReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);