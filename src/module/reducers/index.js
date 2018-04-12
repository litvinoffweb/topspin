import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import signUp from '../../containers/Auth/SignUpForm/module/reducer';
import pingEpic from '../../test/reducer';

export const reducers = combineReducers({
    router: routerReducer,
    form: formReducer,
    signUp,
    pingEpic

});