export const actionTypes = {
    DELETE_PLAYER: 'DELETE_PLAYER',
    DELETE_PLAYER_SUCCESS: 'DELETE_PLAYER_SUCCESS',
    DELETE_PLAYER_ERROR: 'DELETE_PLAYER_ERROR'
}

export const deletePlayer = id => ({
    type: actionTypes.DELETE_PLAYER,
    id
})

export const deletePlayerSuccess = () => ({
    type: actionTypes.DELETE_PLAYER_SUCCESS
})

export const deletePlayerError = error => ({
    type: actionTypes.DELETE_PLAYER_ERROR
})