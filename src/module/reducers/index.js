import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export const reducers = combineReducers({
    router: routerReducer,
    form: formReducer
});