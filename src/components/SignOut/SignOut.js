import React from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

import { signOut } from './module/actions'

const SignOut = props => {
    
    const handleClick = () => {
       console.log('sign out')
    }
    
    return(
        <Box>
            <Button label='SIGN OUT' onClick={props.SignOut}/>
        </Box>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => {
            dispatch(signOut())
        }
    }
}

export default connect(null, mapDispatchToProps)(SignOut);