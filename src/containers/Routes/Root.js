import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

import { Route, Switch } from 'react-router-dom';
import AdminPage from './AdminPage/AdminPage';
import AuthPage from './AuthPage/AuthPage';
import UserPage from './UserPage/UserPage';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import ProtectedAdmin from '../../components/ProtectedAdmin/ProtectedAdmin';



class Root extends Component {
    render() {
        console.log('root', this.props);
        return (
            <Box>
                          
            </Box>
        );
    }
}

const mapStateToProps = state => ({
    jopa: state.authUser
})

export default withRouter(connect(mapStateToProps, null)(Root));