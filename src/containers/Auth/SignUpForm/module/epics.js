import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { actionTypes, signUpSuccess, test, signUpError } from './actions';

export const signUpUserEpic = action$ =>
    action$.ofType(actionTypes.SIGN_UP_REQUEST)
        .switchMap( ({ email, password}) => 
            Observable.fromPromise(firebase.auth().createUserWithEmailAndPassword(email, password))
            .map(result => signUpSuccess(result))
            .catch( error => Observable.of(signUpError(error)))
        )