import { combineReducers } from 'redux'
import paramsReducer from './paramsReducer';

const app = combineReducers({ params: paramsReducer });

export default app;

