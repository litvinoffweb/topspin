import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import history from '../history';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase';

import { reducers } from '../module/reducers';
import { rootEpics } from '../module/epics';

const rrfConfig = {
    userProfile: 'users'
  }


  const createStoreWithFirebase = compose(
      reactReduxFirebase(firebase, rrfConfig)
  )(createStore);

const epicMiddleware = createEpicMiddleware(rootEpics);

const routMiddleware = routerMiddleware(history);

export const store = createStoreWithFirebase(reducers, composeWithDevTools(applyMiddleware(routMiddleware, epicMiddleware)))

