import { combineReducers } from 'redux';
import BookReducer from './book-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  bookStore: BookReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
