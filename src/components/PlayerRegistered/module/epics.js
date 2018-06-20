import { Observable } from 'rxjs/Observable';
import { actionTypes, deletePlayerRegisteredError } from './actions';
import firebase from 'firebase';

export const deletePlayerRegisteredEpic = action$ => 
    action$.ofType(actionTypes.DELETE_PLAYER_REGISTERED)
        .do(res => console.log(res))
        .switchMap( ({tourID, playerID}) => 
             Observable.of(deletePlayerRegisteredFromDB(tourID, playerID))
            .catch( error => Observable.of(deletePlayerRegisteredError(error)))
    )
        

const deletePlayerRegisteredFromDB = (tourID, playerID) => {

    const db = firebase.database();
    db.ref().child('tournaments/' + tourID + '/' + playerID).remove();
}