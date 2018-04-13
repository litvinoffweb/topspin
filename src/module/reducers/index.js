import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authUser from '../../containers/Auth/module/reducers';
import authorized from '../../containers/Auth/Authorized/module/reducer';



export const reducers = combineReducers({
    router: routerReducer,
    form: formReducer,
    authUser,
    authorized

});