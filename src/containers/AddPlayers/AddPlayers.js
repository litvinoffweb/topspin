import React from 'react';
import PlayersList from '../../components/PlayersList/PlayersList';
import CreatePlayer from '../../components/CreatePlayer/CreatePlayer';

import Box from 'grommet/components/Box';


const AddPlayer = props => {
    return(
        <Box direction='row'>
            
            <Box className='col-2'>
                <CreatePlayer {...props}  className='with-shadow'/>
            </Box>
            <Box className='col-1'/>
            <Box className='col-9'>
                <PlayersList {...props} />
            </Box>
        </Box>
    )
}

export default AddPlayer;