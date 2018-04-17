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


    store.dispatch(addPlayer('a','a','a','a','a','a','a','a',));

    // function writeUserData(userId, name, rate, style, shake, age) {
    //     firebase.database().ref('players/' + userId).set({
    //       name: name,
    //       id : userId,
    //       rate: rate,
    //       style: style,
    //       shake: shake,
    //       age: age
    //     });
    //   }

    //   writeUserData("1", 'Petr2 Shevchenko', 1000, 'attacker', 'classic', 25);
      

