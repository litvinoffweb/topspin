import { Observable } from 'rxjs/Observable';
import { actionTypes, fetchTournamentsSuccess, fetchTournamentsError } from './actions';
import { contains } from 'ramda';
import firebase from 'firebase'

export const fetchTournamentsEpic = action$ =>
    action$.ofType(actionTypes.FETCH_TOURNAMENTS)
    .do(tours => console.log(tours))
        .switchMap( () => 
            Observable.of(getTournamentsFromFirebase('tournaments'))
            .map( tournaments => fetchTournamentsSuccess(tournaments))
            .catch( error => Observable.of(fetchTournamentsError(error)))
    )

    const getTournamentsFromFirebase = (value) => {

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