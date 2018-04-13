import { Observable } from 'rxjs/Observable';
import { actionTypes, signInOrSignUp } from './actions'

export const signInOrSignUpEpic = action$ => 
        action$.ofType(actionTypes.SIGN_IN_SUCCESS, actionTypes.SIGN_UP_SUCCESS)
                .mapTo(signInOrSignUp())