import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import { Link, Redirect } from 'react-router-dom';

import ProtectedRoute from '../../../components/ProtectedRoute/ProtectedRoute';

class UserPage extends Component {



    render() {
        console.log(this.props, 'suerpage')
        const { user } = this.props
        return (
            <Box>           
                {!user.uid 
                    ? <Redirect to='/auth'/> 
                    : <Box direction='row' justify='around'  className='direction_box'>
                        <Box> 
                            <Heading tag="h3" className='h3-style' strong={true}>
                                User : {user.email}
                            </Heading>
                        </Box>
                        <Box>
                            <Button onClick={this.props.firebase.logout} className='log_out' label='LOGOUT'/>
                        </Box>
                    </Box>}
            </Box>
        );
    };
};



export default compose(
    withFirebase
)(UserPage);