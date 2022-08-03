import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducers from './authReducers';
import themeReducers from './themeReducers';

export default combineReducers({
    auth: authReducers,
    form: formReducer,
    theme:themeReducers
  });
  