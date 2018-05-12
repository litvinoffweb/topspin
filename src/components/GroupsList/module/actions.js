export const actionTypes = {
    FETCH_GROUPS: 'FETCH_GROUPS',
    FETCH_GROUPS_SUCCESS: 'FETCH_GROUPS_SUCCESS',
    FETCH_GROUPS_ERROR: 'FETCH_GROUPS_ERROR',
    FETCH_GROUPS_COUNT: 'FETCH_GROUPS_COUNT',
    FETCH_GROUPS_COUNT_SUCCESS: 'FETCH_GROUPS_COUNT_SUCCESS',
    FETCH_GROUPS_COUNT_ERROR: 'FETCH_GROUPS_COUNT_ERROR'
}

export const fetchGroups = id => ({
    type: actionTypes.FETCH_GROUPS,
    id
});

export const fetchGroupsSuccess = groups => ({
    type: actionTypes.FETCH_GROUPS_SUCCESS,
    groups
});

export const fetchGroupsError = error => ({
    type: actionTypes.FETCH_GROUPS_ERROR,
    error
});

export const fetchGroupsCount = id => ({
    type: actionTypes.FETCH_GROUPS_COUNT,
    id
});

export const fetchGroupsCountSuccess = count => ({
    type: actionTypes.FETCH_GROUPS_COUNT_SUCCESS,
    count
});

export const fetchGroupsCountError = error => ({
    type: actionTypes.FETCH_GROUPS_COUNT_ERROR,
    error
});

