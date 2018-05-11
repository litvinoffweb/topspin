import { Observable } from 'rxjs/Observable';
import { actionTypes, fetchRegisteredPlayersSuccess, fetchRegisteredPlayersError } from './actions';
import { contains } from 'ramda';
import firebase from 'firebase'

export const fetchRegisteredPlayersEpic = action$ =>
    action$.ofType(actionTypes.FETCH_REGISTERED_PLAYERS)
    //.do((data) => console.log(data))
        .switchMap( ({id}) => 
            Observable.of(getRegisteredPlayersFromFirebase('tournaments/' + id + '/players'))
            //.do( tours => console.log(tours, 'tours'))
            .map( players => fetchRegisteredPlayersSuccess(players))
            .catch( error => Observable.of(fetchRegisteredPlayersError(error)))
    )

    const getRegisteredPlayersFromFirebase = (value) => {

        const db = firebase.database();
        const playersRef = db.ref().child(value);
        const items = [];
        
        playersRef.on('value', snapshot => {
            snapshot.forEach(snapshotChild => {
                
                const item = snapshot.val();
                
                for (let keys in item) {
                    if(contains(item[keys], items)) {
                        //console.log(item[keys])
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