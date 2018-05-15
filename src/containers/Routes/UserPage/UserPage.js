import React from 'react';
import { withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import PlayersList from '../../../components/PlayersList/PlayersList';


const UserPage = props => {

        const { user, firebase } = props
        return (
            <Box>           
                {!user.uid 
                    ? <Redirect to='/auth'/> 
                    :   <Box>
                            <Box direction='row' justify='around'  className='direction_box'>
                                <Box> 
                                     <Heading tag="h3" className='h3-style' strong={true}>
                                          User : {user.email}
                                     </Heading>
                                </Box>
                            <Box>
                                <Button onClick={firebase.logout} className='log_out' label='LOGOUT'/>
                            </Box>
                        
                            </Box>
                          <PlayersList />
                        </Box>
                }
                    
            </Box>
        );
};

const mapStateToProps = state => ({
    players: state.players.players
});

const reduxUserPage = reduxForm({
    form: 'user-page'
})(UserPage);

const withConnect = connect(mapStateToProps, null);

export default compose(
    withFirebase,
    withConnect
)(reduxUserPage);