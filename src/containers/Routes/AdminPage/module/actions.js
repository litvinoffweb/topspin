export const actionTypes = {
    ADD_PLAYER: 'ADD_PLAYER',
    ADDED_PLAYER_SUCCESS: 'ADDED_PLAYER_SUCCESS',
    ADD_PLAYER_ERROR: 'ADD_PLAYER_ERROR'
}



export const addPlayer = (Name, Surname, Age, Rating, Style = 'Attacker', Classic = '', Asian = '', Japan = '') => ({
    type: actionTypes.ADD_PLAYER,
        Name,
        Surname,
        Age,
        Rating,
        Style,
        Classic,
        Asian,
        Japan
})
        


export const addedPlayerSuccess = () => ({
    type: actionTypes.ADDED_PLAYER_SUCCESS
})

export const addPlayerError = () => ({
    type: actionTypes.ADD_PLAYER_ERROR
})