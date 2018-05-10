export const actionTypes = {
    DELETE_PLAYER_REGISTERED: 'DELETE_PLAYER_REGISTERED',
    DELETE_PLAYER_REGISTERED_SUCCESS: 'DELETE_PLAYER_REGISTERED_SUCCESS',
    DELETE_PLAYER_REGISTERED_ERROR: 'DELETE_PLAYER_REGISTERED_ERROR'
}

export const deletePlayerRegistered = (tourID, playerID) => ({
    type: actionTypes.DELETE_PLAYER_REGISTERED,
    tourID,
    playerID
})

export const deletePlayerRegisteredSuccess = () => ({
    type: actionTypes.DELETE_PLAYER_REGISTERED_SUCCESS
})

export const deletePlayerRegisteredError = error => ({
    type: actionTypes.DELETE_PLAYER_REGISTERED_ERROR
})