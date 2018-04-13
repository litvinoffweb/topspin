import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { actionTypes, signUpSuccess, signUpError, signInSuccess, signInError } from './actions';
import { ajax } from 'rxjs/observable/dom/ajax';

export const signUpUserEpic = action$ =>
    action$.ofType(actionTypes.SIGN_UP_REQUEST)
        .switchMap( ({ email, password}) => 
            Observable.fromPromise(firebase.auth().createUserWithEmailAndPassword(email, password))
            .map(result => signUpSuccess(result))
            .catch( error => Observable.of(signUpError(error)))
        )

export const signInUserEpic = action$ =>
    action$.ofType(actionTypes.SIGN_IN_REQUEST)
        .switchMap(({email, password}) => 
            Observable.of(firebase.auth().signInWithEmailAndPassword(email, password))
            .map(result => signInSuccess(result))
            .catch(error => Observable.od(signInError(error)))
        
        )

const fromJson = data => {
    return data.json()
}