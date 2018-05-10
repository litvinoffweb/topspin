import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { actionTypes } from './actions';

export const createTournamentEpic = action$ =>
    action$.ofType(actionTypes.CREATE_TOURNAMENT)
    .do(values => console.log(values, 'from epic'))
        .switchMap( ({name, date, players}) => 
            Observable.of( createTournamentOnDB({name, date, players}))
    )
    

const createTournamentOnDB = ({name, date, players}) => {
    firebase.database().ref('tournaments/' + Date.now().toString()).set({
        name,
        date,
        id: Date.now().toString(),
        current: false,
        players: '',
        tables: '',
        groups: ''
    })
}