import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import pingReducer from '../../test/reducer';


export const reducers = combineReducers({
    router: routerReducer,
    form: formReducer,
    pingReducer
});