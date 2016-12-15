import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Goal from './reducer_step1';
import GetItem from './reducer_step2_get';
import Daily from './reducer_step1';

const rootReducer = combineReducers({
  form: formReducer,
  goal: Goal,
  daily: Daily,
  items: GetItem
});

export default rootReducer;
