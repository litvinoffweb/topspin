import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'rxjs';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import { store } from './redux/store';
import firebase from 'firebase';
import './index.scss';
import { signUpRequest } from './containers/Auth/SignUpForm/module/actions';
import { ping } from './test/action';


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));


    store.dispatch( ping('takaea data') );

    // const firebaseRef = firebase.database().ref();

    // console.log(firebaseRef.child("players"))

    

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

    //   writeUserData("asd23r2asdasss213123", 'Petr2 Shevchenko', 1000, 'attacker', 'classic', 25);
      

