import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { signOutError, actionTypes, signOutSuccess } from './actions';


export const signOutEpic = action$ =>
    action$.ofType(actionTypes.SIGN_OUT)
        .switchMap(() => 
            Observable.fromPromise( () => firebase.auth().signOut())
            .map(() => signOutSuccess())
            .catch(Observable.of((error) => signOutError(error)))
        )
        