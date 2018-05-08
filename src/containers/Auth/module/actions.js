export const actionTypes = {
    SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_IN_ERROR: 'SIGN_IN_ERROR',
    SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
    SIGN_UP_ERROR: 'SIGN_UP_ERROR',
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
export const signUpRequest = (email, password) => ({
    type: actionTypes.SIGN_UP_REQUEST,
    email,
    password
});

export const signUpSuccess = (user) => ({
        type: actionTypes.SIGN_UP_SUCCESS,
        payload: user
});

export const signUpError = error => ({
        type: actionTypes.SIGN_UP_ERROR,
        error: error
});