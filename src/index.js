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
import { fetchPlayer } from './components/PlayersList/module/actions';
import { fetchTournaments } from './components/TournamentsList/module/actions';



ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

// const db = firebase.database();

// db.ref().child('players/' + 1525352326608 + '/').remove()


const obj = {
    players: []
}

console.log(obj)

store.dispatch(fetchPlayer());
store.dispatch(fetchTournaments());

console.log(fetch('https://graph.facebook.com/v3.0/820882001277849')
    .then(res => console.log(res.json())
    ));
