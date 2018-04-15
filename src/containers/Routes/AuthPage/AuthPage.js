import React, { Component } from 'react';
import { connect } from 'react-redux';

import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import ErrorField from '../../../components/ErrorField/ErrorField';
import ProtectedRoute from '../../../components/ProtectedRoute/ProtectedRoute';

import SignInForm from '../../Auth/SignInForm/SignInForm';
import SignUpForm from '../../Auth/SignUpForm/SignUpForm';
import SignForm from '../../Auth/SignForm/SignForm';


import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { signUpRequest } from '../../Auth/module/actions';
import { signInRequest } from '../../Auth/module/actions';

import Loader from '../../../components/Loader/Loader';

class AuthPage extends Component {

    handleSignIn = (values) => {
        console.log(values)
    }

    render() {

        const { authorized, user } = this.props;
        
        return (
            <Box 
                className='main_background'
                full='vertical'
                size='full'
                justify='center'
                responsive={true}
                >
                <Box>
                    <Heading tag="h1" uppercase={true} strong ={true} className='h1-color'>
                        Auth Page
                    </Heading>
                    <Box direction='row' justify='center'>
                            <NavLink to='/auth/signin' className='nav-link' activeStyle={{backgroundColor : '#FBC02D', color: '#fff'}}> SIGN IN </NavLink>
                            <NavLink to='/auth/signup' className='nav-link' activeStyle={{backgroundColor : '#FBC02D', color: '#fff'}}> SIGN UP </NavLink>
                    </Box>
                </Box>
                <Box justify='center' direction='row'>                    
                    <Switch>
                        <Route path='/auth/signin' render={ () => <SignInForm onSubmit={this.props.signIn}/>}/>
                        <Route path='/auth/signup' render={ () => <SignUpForm onSubmit={this.props.signUp} ErrorField={ErrorField}/>}/>
                        <Route path={`/user/id:${user.uid}`} render={ () => <ProtectedRoute id={user.uid} email={user.email}/>}/>
                    </Switch>
                {/* {(user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3') ? <Redirect to={`/admin`}/> : <Redirect to={`/auth`}/>} */}
            
            </Box>
        </Box>
        );
    };
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
        user: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);