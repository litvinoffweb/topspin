import { combineEpics } from 'redux-observable';
import { pingEpic } from '../../test/epic';

export const rootEpics = combineEpics(
    pingEpic
);

