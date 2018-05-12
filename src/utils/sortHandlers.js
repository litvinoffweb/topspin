import firebase from 'firebase';

const handlerSortByName = (players, tourID) => {
    const db = firebase.database();

    const sortedByName = players.sort((p1, p2) => {
        return p1 > p2
    })

    db.ref().child('/tournaments' + tourID).update({
        players: sortedByName
    })

}