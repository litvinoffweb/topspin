import React from 'react';
import PlayersList from '../../components/PlayersList/PlayersList';
import CreatePlayer from '../../components/CreatePlayer/CreatePlayer';

import Box from 'grommet/components/Box';


const AddPlayer = props => {
    return(
        <Box direction='row'>
            
            <Box className='col-4'>
                <CreatePlayer {...props}  />
            </Box>
            <Box className='col-1' />            
            <Box className='col-6'>
                <PlayersList {...props} />
            </Box>
        </Box>
    )
}

export default AddPlayer;