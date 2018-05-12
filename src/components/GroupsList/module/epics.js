import { Observable } from 'rxjs/Observable';
import { actionTypes, fetchGroupsSuccess, fetchGroupsError, fetchGroupsCountSuccess, fetchGroupsCountError } from './actions';
import { contains } from 'ramda';
import firebase from 'firebase'

export const fetchGroupsEpic = action$ =>
    action$.ofType(actionTypes.FETCH_GROUPS)
    //.do((data) => console.log(data))
        .switchMap( ({id}) => 
            Observable.of(getGroupsFromFirebase('tournaments/' + id + '/groups/result/result'))
            //.do( tours => console.log(tours, 'groups'))
            .map( groups => fetchGroupsSuccess(groups))
            .catch( error => Observable.of(fetchGroupsError(error)))
    )
    export const fetchGroupsCountEpic = action$ =>
    action$.ofType(actionTypes.FETCH_GROUPS_COUNT)
    //.do((data) => console.log(data))
        .switchMap( ({id}) => 
            Observable.of(getGroupsCountFromFirebase('tournaments/' + id + '/groups/count/'))
            //.do( tours => console.log(tours, 'countgroups'))
            .map( groups => fetchGroupsCountSuccess(groups))
            .catch( error => Observable.of(fetchGroupsCountError(error)))
    )

    const getGroupsFromFirebase = (value) => {

        const db = firebase.database();
        const playersRef = db.ref().child(value);
        const items = {};
        
        playersRef.on('value', snapshot => {
            snapshot.forEach(snapshotChild => {
                
                const item = snapshot.val();
                
                for (let keys in item) {
                    if(contains(item[keys], items)) {
                        //console.log(item[keys])
                    }
                    else {
                        
                        const newItem = item[keys]
                        //console.log(newItem)
                            for (let keys in newItem) {
                                var smallItem = newItem[keys]
                                
                            }
                         items[keys] = smallItem;
                    }
                } 
            })
        });
        return items;
    }

    const getGroupsCountFromFirebase = (value) => {

        const db = firebase.database();
        const playersRef = db.ref().child(value);
        const items = {};
        let itemSingle;
        playersRef.on('value', snapshot => {
            snapshot.forEach(snapshotChild => {
                
                const item = snapshot.val();
                
                for (let keys in item) {
                    if(contains(item[keys], items)) {
                        
                    }
                    else {
                        
                        const newItem = item[keys]
                        
                         itemSingle = newItem;
                    }

                } 
            })
        });
        return itemSingle;
    }