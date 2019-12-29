import searchReducer from './search';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    searchReducer: searchReducer
})

export default allReducers;