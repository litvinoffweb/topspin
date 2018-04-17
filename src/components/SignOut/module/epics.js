import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { signOut, signOutError, actionTypes } from './actions';

export const signOutEpic = action$ =>
    action$.ofType(actionTypes.SIGN_OUT)
        .do(() => console.log('s'))
        