import defaultPlayers from './emptyState';
import { actionTypes } from './actions';
import { immutableSet } from '../../../utils/immutable';
import { compose } from 'ramda';


export const ACTION_HANDLERS = {
    [actionTypes.FETCH_PLAYERS]: (state, action) => immutableSet(['isFetching'], true, state),
    [actionTypes.FETCH_PLAYERS_SUCCESS]: (state, action) => compose(
        immutableSet(['isLoaded'], true),
        immutableSet(['players'], action.players),
        immutableSet(['isFetching'], false)
    )(state),
    [actionTypes.FETCH_PLAYERS_ERROR]: (state, action) => immutableSet(['error'], action.error, state)  
}

export default function players(state = defaultPlayers, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}