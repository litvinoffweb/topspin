import defaultTournaments from './emptyState';
import { actionTypes} from './actions';
import { immutableSet } from '../../../utils/immutable';
import { compose } from 'ramda';


export const ACTION_HANDLERS = {
    [actionTypes.FETCH_REGISTERED_PLAYERS]: (state, action) => immutableSet(['isFetching'], true, state),
    [actionTypes.FETCH_REGISTERED_PLAYERS_SUCCESS]: (state, action) => compose(
        immutableSet(['isLoaded'], true),
        immutableSet(['registeredPlayers'], action.players),
        immutableSet(['isFetching'], false)
    )(state),
    [actionTypes.FETCH_REGISTERED_PLAYERS_ERROR]: (state, action) => immutableSet(['error'], action.error, state)  
}

export default function registeredPlayers(state = defaultTournaments, action) {
    
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}