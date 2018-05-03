import { Observable } from 'rxjs/Observable';
import { actionTypes, addedPlayerSuccess, addPlayerError } from './actions';
import firebase from 'firebase';


export const addPlayerEpic = action$ =>
    action$.ofType(actionTypes.ADD_PLAYER)
        .switchMap( ({Name, Surname, Age, Rating, Style, Classic, Asian, Japan, }) =>
            Observable.of(addData({Name, Surname, Age, Rating, Style, Classic, Asian, Japan, })
            )
            .map( () => addedPlayerSuccess())
            .catch(error => Observable.of(addPlayerError(error)))
    )

    const addData = ({Name, Surname, Age, Rating, Style, Classic, Asian, Japan, }) => {
        console.log({Name, Surname, Age, Rating, Style, Classic, Asian, Japan, })
        
        const makeShortName = (Name, Surname) => {
           
            return Name.slice(0,1).toUpperCase() + '-' + Surname.slice(0,1).toUpperCase() + Surname.slice(1);
        }

        firebase.database().ref('players/' + makeShortName(Name, Surname)).set({
            Name,
            Surname,
            Age,
            Rating,
            id: Date.now().toString(),
            Style,               
            Classic,
            Asian,
            Japan,
            Checked: false
               
        })

    }