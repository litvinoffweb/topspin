import { Observable } from 'rxjs/Observable';
import { actionTypes, deletePlayerError } from './actions';
import firebase from 'firebase';

export const deletePlayerEpic = action$ => 
    action$.ofType(actionTypes.DELETE_PLAYER)
        .switchMap( ({id}) => 
             Observable.of(deletePlayerFromDB(id))
            .catch( error => Observable.of(deletePlayerError(error)))
    )
        

const deletePlayerFromDB = id => {

    const db = firebase.database();
    db.ref().child('players/' + id + '/').remove();
}
    
