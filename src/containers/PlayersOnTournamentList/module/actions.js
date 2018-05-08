export const actionTypes = {
    FETCH_REGISTERED_PLAYERS: 'FETCH_REGISTERED_PLAYERS',
    FETCH_REGISTERED_PLAYERS_SUCCESS: 'FETCH_REGISTERED_PLAYERS_SUCCESS',
    FETCH_REGISTERED_PLAYERS_ERROR: 'FETCH_REGISTERED_PLAYERS_ERROR'
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
