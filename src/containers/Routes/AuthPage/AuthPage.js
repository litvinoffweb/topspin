import React from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import ErrorField from '../../../components/ErrorField/ErrorField';
import AuthComponent from '../../../components/AuthComponent/AuthComponent'

import SignInForm from '../../Auth/SignInForm/SignInForm';
import SignUpForm from '../../Auth/SignUpForm/SignUpForm';

import { Route, Switch, Redirect } from 'react-router-dom';
import { signUpRequest } from '../../Auth/module/actions';
import { signInRequest } from '../../Auth/module/actions';

const adminID = 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3';

const AuthPage = props => {

        const { user, auth } = props;
        //const path = auth && user.uid === adminID ? '/admin' : '/'
        return (
            <Box 
                className='main_background'
                full='vertical'
                size='full'
                justify='center'
                responsive={true}
                >
                <AuthComponent {...props}/>
                <Box direction='row' justify='center' className='direction_box'>                    
                    <Switch>                        
                        <Route path='/auth/signin' render={ () => <SignInForm onSubmit={props.signIn}/>}/>
                        <Route path='/auth/signup' render={ () => <SignUpForm onSubmit={props.signUp} ErrorField={ErrorField}/>}/>
                    </Switch>
                {auth && user.uid === adminID
                    ? <Redirect to={`/admin`} />
                    : auth && user.uid
                        ?  <Redirect to={`/user/id:${user.uid}`}/> 
                        : ''}
                
                </Box>
        </Box>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        signUp: values => {
            
            dispatch(signUpRequest(values.email, values.password));
        },
        signIn: values => {
            dispatch(signInRequest(values.email, values.password));
        }
    }
}

const mapStateToProps = state => {
    return {
        isLoaded: state.firebase.profile.isLoaded,
        user: state.firebase.auth,
        auth: state.authorized.authorized
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);