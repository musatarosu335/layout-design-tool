import { createStore } from 'redux';
import sheetReducer from '../reducers';

const store = createStore(sheetReducer);

export default store;
