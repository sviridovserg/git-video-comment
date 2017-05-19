import { combineReducers } from 'redux'
import params from './paramsReducer';
import result from './resultReducer';

const app = combineReducers({ params, result });

export default app;

