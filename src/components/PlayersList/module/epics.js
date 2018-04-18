import { Observable } from 'rxjs/Observable';
import { actionTypes, fetchPlayersSuccess, fetchPlayersError } from './actions';
import firebase from 'firebase';
import { values, keys, contains } from 'ramda';

export const fetchPlayersEpic = action$ =>
    action$.ofType(actionTypes.FETCH_PLAYERS)
        .switchMap( () => 
            Observable.of(getDataFromFirebase('players'))
            .do(res => console.log(res, 'res before'))
            .map( players => fetchPlayersSuccess(players))
            .do(players => console.log(players, 'res after'))
            .catch( error => Observable.of(fetchPlayersError(error)))
        )



        
const getDataFromFirebase = (value) => {

    const db = firebase.database();
    const playersRef = db.ref().child(value);
    const items = [];
    playersRef.on('value', snapshot => {
        snapshot.forEach(snapshotChild => {
            
            const item = snapshot.val();
            for(let keys in item) {
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