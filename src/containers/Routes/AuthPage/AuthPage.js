import React, { Component } from 'react';
import { connect } from 'react-redux';

import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';

import SignInForm from '../../Auth/SignInForm/SignInForm';
import SignUpForm from '../../Auth/SignUpForm/SignUpForm';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { signUpRequest } from '../../Auth/module/actions';
import { signInRequest } from '../../Auth/module/actions';

import Loader from '../../../components/Loader/Loader';

class AuthPage extends Component {

    handleSignIn = (values) => {
        console.log(values)
    }

    render() {

        const { authorized } = this.props;
        
        return (
            <Box>
                <Heading tag="h1">
                    Auth Page
                </Heading>
            <Box>
                <Box direction='row' justify='center'>
                    <NavLink to='/auth/signin' className='nav-link' activeStyle={{backgroundColor : '#CDDC39', color: '#fff'}}> Sign in </NavLink>
                    <NavLink to='/auth/signup' className='nav-link' activeStyle={{backgroundColor : '#CDDC39', color: '#fff'}}> Sign up </NavLink>
                </Box>
            <Switch>
                <Route path='/auth/signin' render={ () => <SignInForm onSubmit={this.props.signIn}/>}/>
                <Route path='/auth/signup' render={ () => <SignUpForm onSubmit={this.props.signUp}/>}/>
            </Switch>
            {this.props.isLoading && <Loader />}
            
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
        isLoading: state.authUser.isLoading,
        user: state.authUser.user,
        authorized: state.authorized.authorized
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);