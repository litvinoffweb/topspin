import defaultUser from './emptyState';
import { actionTypes } from './actions';
import { immutableSet } from '../../../utils/immutable';
import { compose } from 'ramda';

export const ACTION_HANDLERS = {
    [actionTypes.SIGN_IN_REQUEST]: (state, action) => immutableSet(['isLoading'], true, state),
    [actionTypes.SIGN_IN_SUCCESS]: (state, action) => compose(
        immutableSet(['isLoading'], false),
        immutableSet(['user'], action.payload),
        immutableSet(['authorized'], true)
    )(state),
    [actionTypes.SIGN_UP_REQUEST]: (state, action) => immutableSet(['isLoading'], true, state),
    [actionTypes.SIGN_UP_SUCCESS]: (state, action) => compose(
        immutableSet(['isLoading'], false),
        immutableSet(['user'], action.payload),
        immutableSet(['authorized'], true)
    )(state)
}

export default function signUp(state = defaultUser, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}