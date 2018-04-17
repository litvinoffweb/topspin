import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import { Link, Redirect } from 'react-router-dom';

import ProtectedAdmin from '../../../components/ProtectedAdmin/ProtectedAdmin';

class AdminPage extends Component {



    render() {
        console.log(this.props, 'admin page')
        const { admin, firebase: { logout } } = this.props
        return (
            <Box>
                
                {!admin.uid && admin.isLoaded
                     ? <Redirect to='/auth'/> 
                     : <Box direction='row' justify='around'  className='direction_box'>
                            <Box> 
                                <Heading tag="h3" className='h3-style' strong={true}>
                                    Admin : Stanislav
                                </Heading>
                            </Box>
                            <Box>
                                <Button onClick={logout} className='log_out' label='LOGOUT'/>
                            </Box>
                        </Box>}
                
                {/* {!user.email ? <Link to='/auth'className='nav-link'>Auth page </Link> : ''} */}


            </Box>
        );
    };
};



export default compose(
    withFirebase
)(AdminPage);