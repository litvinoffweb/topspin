import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import history from '../history';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';

import { reducers } from '../module/reducers';
import { rootEpics } from '../module/epics';

const epicMiddleware = createEpicMiddleware(rootEpics);

const routMiddleware = routerMiddleware(history);

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(routMiddleware, epicMiddleware)))

