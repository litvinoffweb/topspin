import React, { Component } from 'react';

import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';

import SignInForm from '../../Auth/SignInForm/SignInForm';
import SignUpForm from '../../Auth/SignUpForm/SignUpForm';

import { Route, NavLink } from 'react-router-dom';


class AuthPage extends Component {

    handleSignIn = (values) => {
        console.log(values, 'values')
    }

    handleSignUp = (values) => {
        console.log(values, 'values')
    }

    render() {
        return (
            <Box>
                <Heading tag="h1">
                    Auth Page
                </Heading>
                <Box>
                    <NavLink to='/auth/signin' activeStyle={{color : 'red'}}> Sign in </NavLink>
                    <NavLink to='/auth/signup' activeStyle={{color : 'red'}}> Sign up </NavLink>                
                    <Route path='/auth/signin' render={ () => <SignInForm onSubmit={this.handleSignIn}/>}/>
                    <Route path='/auth/signup' render={ () => <SignUpForm onSubmit={this.handleSignUp}/>}/>
                </Box>
            </Box>
        );
    };
};

export default AuthPage;