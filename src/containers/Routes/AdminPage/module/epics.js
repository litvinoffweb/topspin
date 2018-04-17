import { Observable } from 'rxjs/Observable';
import { actionTypes, addPlayer, addedPlayerSuccess, addPlayerError } from './actions';
import firebase from 'firebase';


export const addPlayerEpic = action$ =>
    action$.ofType(actionTypes.ADD_PLAYER)
        .switchMap( ({name, surname, age, rate}) =>
            Observable.of(addData({name, surname, age, rate})
            )
            .map( () => addedPlayerSuccess())
            .catch(error => Observable.of(addPlayerError(error)))
    )

    const addData = ({name, surname, age, rate}) => {
        console.log({name, surname, age, rate})
        firebase.database().ref('players/' + name + surname).set({
            name,
            surname,
             age,
              rate,
              id: Date.now().toString()
               
        })

    }