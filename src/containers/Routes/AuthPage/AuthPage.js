import React, { Component } from 'react';
import { connect } from 'react-redux';

import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';

import SignInForm from '../../Auth/SignInForm/SignInForm';
import SignUpForm from '../../Auth/SignUpForm/SignUpForm';

import { Route, NavLink } from 'react-router-dom';
import { signUpRequest } from '../../Auth/SignUpForm/module/actions';

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
                    <Route path='/auth/signup' render={ () => <SignUpForm onSubmit={this.props.signUp}/>}/>
                </Box>
            </Box>
        );
    };
};


const mapDispatchToProps = dispatch => {
    return {
        signUp: values => {
            dispatch(signUpRequest(values.email, values.password));
        }
    }
}

export default connect(null, mapDispatchToProps)(AuthPage);