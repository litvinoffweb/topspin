export const actionTypes = {
    ADD_PLAYER: 'ADD_PLAYER',
    ADDED_PLAYER_SUCCESS: 'ADDED_PLAYER_SUCCESS',
    ADD_PLAYER_ERROR: 'ADD_PLAYER_ERROR'
}



export const addPlayer = (name, surname, age, rate, radio, checkboxClassic = false, checkboxAsian = false, checkboxJapan = false, ...rest) => ({
    type: actionTypes.ADD_PLAYER,
        name,
        surname,
        age,
        rate,
        radio,
        checkboxClassic,
        checkboxAsian,
        checkboxJapan,
         ...rest
})
        


export const addedPlayerSuccess = () => ({
    type: actionTypes.ADDED_PLAYER_SUCCESS
})

export const addPlayerError = () => ({
    type: actionTypes.ADD_PLAYER_ERROR
})