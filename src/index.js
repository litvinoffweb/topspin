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
import { interval } from 'rxjs/observable/interval';
import { of } from 'rxjs/observable/of';
import {  tap } from 'rxjs/operators/tap';
import {  map } from 'rxjs/operators/map';
import {  fromEvent } from 'rxjs/observable/fromEvent';



import { mapTo } from 'rxjs/operators/mapTo';


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

    const source = fromEvent(document, 'click');

    const example = source.pipe(
        //tap(val => console.log(`before map: ${val.type}`)),
        //tap( val => console.log(`after map ${val.target}`))
    )

    //const subscribe = example.subscribe(val => console.log(val))
//before 11


store.dispatch(fetchPlayer());
store.dispatch(fetchTournaments());
