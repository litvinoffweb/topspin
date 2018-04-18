import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'rxjs';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import { store } from './redux/store';
import './index.scss';
import firebase from 'firebase';
import { addPlayer } from './containers/Routes/AdminPage/module/actions';



ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

    // const getDataFromFirebase = (value) => {

    //     const db = firebase.database();
    //     const playersRef = db.ref().child(value);
    
    //     const dates = playersRef.on('value', snapshot => {
    
    //         const data = JSON.stringify(snapshot);
    //         const parsedData = JSON.parse(data);
    //         console.log(parsedData);

    //         return parsedData;
    //     });
        
    //     return dates();
    // }

    // console.log(getDataFromFirebase('players'));