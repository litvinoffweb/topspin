import { Observable } from 'rxjs/Observable';
import { actionTypes, addedPlayerSuccess, addPlayerError } from './actions';
import firebase from 'firebase';


export const addPlayerEpic = action$ =>
    action$.ofType(actionTypes.ADD_PLAYER)
        .switchMap( ({Name, Surname, Age, Rating, Style, Classic, Asian, Japan, Checked, facebookID}) =>
            Observable.of(addData({Name, Surname, Age, Rating, Style, Classic, Asian, Japan, Checked, facebookID })
            )
            .map( () => addedPlayerSuccess())
            .catch(error => Observable.of(addPlayerError(error)))
    )

    const addData = ({Name, Surname, Age, Rating, Style, Classic, Asian, Japan, Checked, facebookID}) => {

        firebase.database().ref('players/' + Date.now().toString()).set({
            Name,
            Surname,
            Age,
            Rating,
            id: Date.now().toString(),
            Style,               
            Classic,
            Asian,
            Japan,
            Checked: false,
            facebookID: 0
               
        })

    }