export const actionTypes = {
    FETCH_REGISTERED_PLAYERS: 'FETCH_REGISTERED_PLAYERS',
    FETCH_REGISTERED_PLAYERS_SUCCESS: 'FETCH_REGISTERED_PLAYERS_SUCCESS',
    FETCH_REGISTERED_PLAYERS_ERROR: 'FETCH_REGISTERED_PLAYERS_ERROR',
    SORT_BY_NAME_REGISTERED_PLAYERS: 'SORT_BY_NAME_REGISTERED_PLAYERS',
    SORT_BY_RATING_REGISTERED_PLAYERS: 'SORT_BY_RATING_REGISTERED_PLAYERS',
    SORT_BY_AGE_REGISTERED_PLAYERS: 'SORT_BY_AGE_REGISTERED_PLAYERS'
    
};

export const fetchRegisteredPlayers = (id) => ({
    type: actionTypes.FETCH_REGISTERED_PLAYERS,
    id
});

export const fetchRegisteredPlayersSuccess = players => ({
    type: actionTypes.FETCH_REGISTERED_PLAYERS_SUCCESS,
    players
});

export const fetchRegisteredPlayersError = error => ({
    type: actionTypes.FETCH_REGISTERED_PLAYERS_ERROR,
    error
});


export const sortByNameRegisteredPlayers = players => ({
    type: actionTypes.SORT_BY_NAME_REGISTERED_PLAYERS,
    players
});

export const sortByRatingRegisteredPlayers = players => ({
    type: actionTypes.SORT_BY_RATING_REGISTERED_PLAYERS,
    players
});

export const sortByAgeRegisteredPlayers = players => ({
    type: actionTypes.SORT_BY_AGE_REGISTERED_PLAYERS,
    players
})