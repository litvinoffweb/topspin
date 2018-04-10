import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'rxjs';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import { store } from './redux/store'
import firebase from 'firebase';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));


    const firebaseRef = firebase.database().ref();

    console.log(firebaseRef.child("players"))

    

    function writeUserData(userId, name, rate, style, shake, age) {
        firebase.database().ref('players/' + userId).set({
          name: name,
          id : userId,
          rate: rate,
          style: style,
          shake: shake,
          age: age
        });
      }

      writeUserData("asd23r2asda", 'Petr Shevchenko', 1000, 'attacker', 'classic', 25);
      

