import { actionTypes } from './actions';
import { immutableSet } from '../../../../utils/immutable';
import initialState from './emptyState';


const ACTION_HANDLERS = {
    [actionTypes.SIGN_IN_OR_SIGN_UP]: (state, action) => immutableSet(['authorized'], true, state),
    [actionTypes.LOG_OUT]: (state, action) => immutableSet(['authorized'], false, state),    

};



export default function(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}