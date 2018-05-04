import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { actionTypes } from './actions';

export const createTournamentEpic = action$ =>
    action$.ofType(actionTypes.CREATE_TOURNAMENT)
    .do(values => console.log(values, 'from epic'))
        .switchMap( ({name, date}) => 
            Observable.of( createTournamentOnDB({name, date}))
    )
    

const createTournamentOnDB = ({name, date}) => {
    firebase.database().ref('tournaments/' + date + ' ' + Date.now().toString()).set({
        name,
        date,
        id: Date.now().toString()
    })
}