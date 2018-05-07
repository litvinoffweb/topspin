import defaultTournaments from './emptyState';
import { actionTypes} from './actions';
import { immutableSet } from '../../../utils/immutable';
import { compose } from 'ramda';


export const ACTION_HANDLERS = {
    [actionTypes.FETCH_TOURNAMENTS]: (state, action) => immutableSet(['isFetching'], true, state),
    [actionTypes.FETCH_TOURNAMENTS_SUCCESS]: (state, action) => compose(
        immutableSet(['isLoaded'], true),
        immutableSet(['tournaments'], action.tournaments),
        immutableSet(['isFetching'], false)
    )(state),
    [actionTypes.FETCH_TOURNAMENTS_ERROR]: (state, action) => immutableSet(['error'], action.error, state)  
}

export default function tournaments(state = defaultTournaments, action) {
    
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}