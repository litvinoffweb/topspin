import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { signOut, signOutError, actionTypes, signOutSuccess } from './actions';


export const signOutEpic = action$ =>
    action$.ofType(actionTypes.SIGN_OUT)
        .switchMap(() => 
            Observable.fromPromise( () => firebase.auth().signOut())
            .do((res) => console.log(res))
            .map(() => signOutSuccess())
            .catch(Observable.of((error) => signOutError(error)))
        )
        