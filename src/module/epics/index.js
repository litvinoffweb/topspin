import { combineEpics } from 'redux-observable';
import { pingEpic } from '../../test/epic';
import { signUpUserEpic } from '../../containers/Auth/SignUpForm/module/epics'

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/toPromise';

export const rootEpics = combineEpics(
    pingEpic,
    signUpUserEpic

);

