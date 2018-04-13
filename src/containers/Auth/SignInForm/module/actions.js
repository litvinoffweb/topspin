export const actionTypes = {
    SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_IN_ERROR: 'SIGN_IN_ERROR',
    SIGN_IN_WITH_SIGN_UP: 'SIGN_IN_WITH_SIGN_UP'
};


export const signInRequest = (email, password) => ({
    type: actionTypes.SIGN_IN_REQUEST,
    email,
    password
});

export const signInSuccess = (user) => ({
        type: actionTypes.SIGN_IN_SUCCESS,
        payload: user
});

export const signInError = error => ({
        type: actionTypes.SIGN_IN_ERROR,
        error: error
});

export const signInWithSignUp = () => ({
    type: actionTypes.SIGN_IN_WITH_SIGN_UP
})