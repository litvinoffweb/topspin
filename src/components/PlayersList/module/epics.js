import { Observable } from 'rxjs/Observable';
import { actionTypes, fetchPlayersSuccess, fetchPlayersError } from './actions';
import firebase from 'firebase';
import { contains } from 'ramda';

export const fetchPlayersEpic = action$ =>
    action$.ofType(actionTypes.FETCH_PLAYERS)
        .switchMap( () => 
            Observable.of(getDataFromFirebase('players'))
            .map( players => fetchPlayersSuccess(players))
            .catch( error => Observable.of(fetchPlayersError(error)))
        )

const getDataFromFirebase = (value) => {

    const db = firebase.database();
    const playersRef = db.ref().child(value);
    const items = [];
    
    playersRef.on('value', snapshot => {
        snapshot.forEach(snapshotChild => {
            
            const item = snapshot.val();

            for (let keys in item) {
                if(contains(item[keys], items)) {
                    
                }
                else {
                    const newItem = item[keys]
                     items.push(newItem);
                }
            } 
        })
    });
    return items;
}