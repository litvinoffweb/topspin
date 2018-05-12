import defaultGroups from './emptyState';
import { actionTypes} from './actions';
import { immutableSet } from '../../../utils/immutable';
import { compose } from 'ramda';


export const ACTION_HANDLERS = {
    [actionTypes.FETCH_GROUPS_COUNT_SUCCESS]: (state, action) => immutableSet(['count'], action.count, state),
    [actionTypes.FETCH_GROUPS]: (state, action) => immutableSet(['isFetching'], true, state),
    [actionTypes.FETCH_GROUPS_SUCCESS]: (state, action) => compose(
        immutableSet(['isLoaded'], true),
        immutableSet(['groups'], action.groups),
        immutableSet(['isFetching'], false)
    )(state),
    [actionTypes.FETCH_GROUPS_ERROR]: (state, action) => immutableSet(['error'], action.error, state)  
}

export default function groups(state = defaultGroups, action) {
    
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}