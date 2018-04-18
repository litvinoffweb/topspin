export const actionTypes = {
    FETCH_PLAYERS: 'FETCH_PLAYERS',
    FETCH_PLAYERS_SUCCESS: 'FETCH_PLAYERS_SUCCESS',
    FETCH_PLAYERS_ERROR: 'FETCH_PLAYER_SUCCESS'
}

export const fetchPlayer = () => ({
    type: actionTypes.FETCH_PLAYERS
})

export const fetchPlayersSuccess = (players) => ({
    type: actionTypes.FETCH_PLAYERS_SUCCESS,
    players
})

export const fetchPlayersError = error => ({
    type: actionTypes.FETCH_PLAYERS_ERROR
})