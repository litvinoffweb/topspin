import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { actionTypes, signUpSuccess, signUpError, signInSuccess, signInError } from './actions';

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
            .do( )
            .map(result => signInSuccess(result))
            .catch(error => signInError(error))
        
        )