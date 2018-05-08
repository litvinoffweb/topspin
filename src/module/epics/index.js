import { combineEpics } from 'redux-observable';
import { pingEpic } from '../../test/epic';
import { signUpUserEpic, signInUserEpic } from '../../containers/Auth/module/epics';
import { signInOrSignUpEpic } from '../../containers/Auth/Authorized/module/epics';
import { signOutEpic } from '../../components/SignOut/module/epics';
import { addPlayerEpic } from '../../containers/Routes/AdminPage/module/epics';
import { getFirebase } from 'react-redux-firebase';
import { fetchPlayersEpic } from '../../components/PlayersList/module/epics';
import { deletePlayerEpic } from '../../components/Player/module/epics';
import { createTournamentEpic } from '../../components/CreateTournament/module/epics';
import { fetchTournamentsEpic } from '../../components/TournamentsList/module/epics';
import { fetchRegisteredPlayersEpic } from '../../containers/PlayersOnTournamentList/module/epics';




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

export const rootEpics = (...args) => 
combineEpics(
    pingEpic,
    signUpUserEpic,
    signInUserEpic,
    signInOrSignUpEpic,
    signOutEpic,
    addPlayerEpic,
    fetchPlayersEpic,
    deletePlayerEpic,
    createTournamentEpic,
    fetchTournamentsEpic,
    fetchRegisteredPlayersEpic

)(...args, getFirebase);

