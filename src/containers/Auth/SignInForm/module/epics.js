import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { actionTypes, signInSuccess, signInError, signInWithSignUp } from './actions';

export const signInUserEpic = action$ =>
    action$.ofType(actionTypes.SIGN_IN_REQUEST)
        .switchMap(({email, password}) => 
            Observable.of(firebase.auth().signInWithEmailAndPassword(email, password))
            .do( )
            .map(result => signInSuccess(result))
            .catch(error => signInError(error))

        )


