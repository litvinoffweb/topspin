import React from 'react';
import { withFirebase } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'ramda';

import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

const AdminPage = props =>  {

        const { admin, firebase: { logout } } = props
        return (
            <Box>
                {!admin.uid
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
            </Box>
        );
};



export default compose(
    withFirebase
)(AdminPage);