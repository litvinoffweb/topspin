import { Observable } from 'rxjs/Observable';
import { actionTypes, fetchPlayersSuccess, fetchPlayersError } from './actions';
import firebase from 'firebase';

export const fetchPlayersEpic = action$ =>
    action$.ofType(actionTypes.FETCH_PLAYERS)
        .switchMap( () => 
            Observable.of(getDataFromFirebase('players'))
            .do(res => console.log(res, 'res'))
            .map( players => fetchPlayersSuccess(players))
            .do(players => console.log(players))
            .catch( error => Observable.of(fetchPlayersError(error)))
        )



        
const getDataFromFirebase = (value) => {

    const db = firebase.database();
    const playersRef = db.ref().child(value);
    const items = [];
    playersRef.on('value', snapshot => {
        snapshot.forEach(snapshotChild => {
            const item = snapshot.val();
            item.key = snapshot.key;
            return items.push(item)
        })
        
    });
    return items;

}