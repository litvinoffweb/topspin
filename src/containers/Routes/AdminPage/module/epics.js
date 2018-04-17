import { Observable } from 'rxjs/Observable';
import { actionTypes, addPlayer, addedPlayerSuccess, addPlayerError } from './actions';
import firebase from 'firebase';


export const addPlayerEpic = action$ =>
    action$.ofType(actionTypes.addPlayer)
        .switchMap(({name, age, rate, style, ...rest}) =>
            Observable.of(addData({
                name,
                 age,
                  rate,
                   style,
                    ...rest})
            )
            .map( () => addedPlayerSuccess())
            .catch(error => Observable.of(addPlayerError(error)))
    )

    const addData = ({name, age, rate, style, ...rest}) => {
        console.log({name, age, rate, style, ...rest})
        firebase.database().ref('/players' + name).set({
            name,
             age,
              rate,
               style,
                id: Date.now().toString(),
                ...rest})

    }