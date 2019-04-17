import {combineReducers} from "redux";
import uiReducer from './ui';
import reposReducer from './repos';

export default combineReducers({
    ui: uiReducer,
    repos: reposReducer
});