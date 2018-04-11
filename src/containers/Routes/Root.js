import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

import { Route } from 'react-router-dom';
import AdminPage from './AdminPage/AdminPage';
import AuthPage from './AuthPage/AuthPage';


class Root extends Component {
    render() {
        return (
            <Box>
                <Route path="/admin" component={AdminPage}/>
                <Route path="/auth" component={AuthPage}/>
                
            </Box>
        );
    }
}

export default Root;