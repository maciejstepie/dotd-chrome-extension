import searchReducer from './search';
import openRaidReducer from './openRaid';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    searchReducer: searchReducer,
    openRaidReducer: openRaidReducer
})

export default allReducers;