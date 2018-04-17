import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';

import Box from 'grommet/components/Box';
import { Link, Redirect } from 'react-router-dom';

import ProtectedRoute from '../../../components/ProtectedRoute/ProtectedRoute';

class UserPage extends Component {



    render() {
        console.log(this.props, 'suerpage')
        const { user } = this.props
        return (
            <Box>
                {!user.uid ? <Redirect to='/auth'/> : <Box direction='row' justify='center' align='center'>
                    <Heading tag="h1">
                        Hello : {user.email}
                    </Heading>
                    <Button onClick={this.props.firebase.logout} className='log_out'> logout </Button>
                </Box>}
                
                {/* {!user.email ? <Link to='/auth'className='nav-link'>Auth page </Link> : ''} */}


            </Box>
        );
    };
};



export default compose(
    withFirebase
)(UserPage);