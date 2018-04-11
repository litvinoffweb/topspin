import React, { Component } from 'react';

import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';

import SignInForm from '../../Auth/SignInForm/SignInForm';


class AuthPage extends Component {

    render() {
        return (
            <Box>
                <Heading tag="h1">
                    Auth Page
                </Heading>
                <Box>
                    <SignInForm />
                </Box>
            </Box>
        );
    };
};

export default AuthPage;