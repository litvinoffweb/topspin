import React, { Component } from 'react';
import { connect } from 'react-redux';

import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import ErrorField from '../../../components/ErrorField/ErrorField';
import ProtectedRoute from '../../../components/ProtectedRoute/ProtectedRoute';
import Image from 'grommet/components/Image';

import SignInForm from '../../Auth/SignInForm/SignInForm';
import SignUpForm from '../../Auth/SignUpForm/SignUpForm';
import SignForm from '../../Auth/SignForm/SignForm';


import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { signUpRequest } from '../../Auth/module/actions';
import { signInRequest } from '../../Auth/module/actions';

import Loader from '../../../components/Loader/Loader';
import AuthComponent from '../../../components/AuthComponent/AuthComponent'

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
                <AuthComponent {...this.props}/>
                
                <Box direction='row' justify='center' className='direction_box'>                    
                    <Switch>
                        <Route path='/auth/user/1' render={ () => <ProtectedRoute id={user.uid} email={user.email} {...this.props}/>}/>                        
                        <Route path='/auth/signin' render={ () => <SignInForm onSubmit={this.props.signIn}/>}/>
                        <Route path='/auth/signup' render={ () => <SignUpForm onSubmit={this.props.signUp} ErrorField={ErrorField}/>}/>
                    </Switch>
            
                {user.uid ? <Redirect to={`/u`}/> : ''}
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