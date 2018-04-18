import { Observable } from 'rxjs/Observable';
import { actionTypes, addPlayer, addedPlayerSuccess, addPlayerError } from './actions';
import firebase from 'firebase';


export const addPlayerEpic = action$ =>
    action$.ofType(actionTypes.ADD_PLAYER)
        .switchMap( ({name, surname, age, rate, radio,  ...rest}) =>
            Observable.of(addData({name, surname, age, rate, radio,  ...rest})
            )
            .map( () => addedPlayerSuccess())
            .catch(error => Observable.of(addPlayerError(error)))
    )

    const addData = ({name, surname, age, rate, radio, ...rest}) => {
        console.log({name, surname, age, rate, radio,  ...rest})
        
        const makeShortName = (name, surname) => {
           
            return name.slice(0,1).toUpperCase() + '-' + surname.slice(0,1).toUpperCase() + surname.slice(1);
        }

        firebase.database().ref('players/' + makeShortName(name, surname)).set({
            name,
            surname,
             age,
              rate,
              id: Date.now().toString(),
               radio,
               
               ...rest
               
        })

    }