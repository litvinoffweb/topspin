export const actionTypes = {
    SIGN_IN_OR_SIGN_UP: 'SIGN_IN_OR_SIGN_UP',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
    LOG_OUT: 'LOG_OUT'
}


export const signInOrSignUp = () => ({
    type: actionTypes.SIGN_IN_OR_SIGN_UP
})

export const logOut = () => ({
    type: actionTypes.LOG_OUT
})