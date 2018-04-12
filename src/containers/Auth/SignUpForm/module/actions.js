import { appName } from '../../../../config';
import firebase from 'firebase';

export const moduleName = 'auth';

export const actionTypes = {
    SIGN_UP_REQUEST: `${appName}/${moduleName}/SIGN_UP_REQUEST`,
    SIGN_UP_SUCCESS: `${appName}/${moduleName}/SIGN_UP_SUCCESS`,
    SIGN_UP_ERROR: `${appName}/${moduleName}/SIGN_UP_ERROR`,
    TEST: 'TEST'
};

export const test = () => ({
    type: actionTypes.TEST
})

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


function signUp(email, password) {
    return dispatch => {
        dispatch({
            type: actionTypes.SIGN_UP_REQUEST
        })
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => dispatch({
                type: actionTypes.SIGN_UP_SUCCESS,
                payload: { user }
            }))
            .catch(error => dispatch({
                type: actionTypes.SIGN_UP_ERROR,
                error
            }))
    }
}