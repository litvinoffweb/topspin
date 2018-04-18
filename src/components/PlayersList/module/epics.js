import { Observable } from 'rxjs/Observable';
import { actionTypes, fetchPlayersSuccess, fetchPlayersError } from './actions';
import firebase from 'firebase';

export const fetchPlayersEpic = action$ =>
    action$.ofType(actionTypes.FETCH_PLAYERS)
        .switchMap( () => 
            Observable.of(getDataFromFirebase('players'))
            .do(res => console.log(res))
            .map( players => fetchPlayersSuccess(players))
            .catch( error => Observable.of(fetchPlayersError(error)))
        )

const getDataFromFirebase = (value) => {

    const db = firebase.database();
    const playersRef = db.ref().child(value);

    return playersRef.on('value', snapshot => {
        
        const data = JSON.stringify(snapshot);
        console.log(data)
        const parsedData = JSON.parse(data);
        console.log(parsedData)

        return parsedData;
    })();

}