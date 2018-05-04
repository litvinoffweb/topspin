import React from 'react';
import PlayersList from '../../components/PlayersList/PlayersList';
import CreatePlayer from '../../components/CreatePlayer/CreatePlayer';

import Box from 'grommet/components/Box';


const AddPlayer = props => {
    return(
        <Box direction='row'>
            
            <Box>
                <CreatePlayer {...props} className='margin-right' className='col-3'/>
            </Box>
            <Box className='col-1'>
            </Box>
            <Box>
                <PlayersList {...props} className='col-7'/>
            </Box>
        </Box>
    )
}

export default AddPlayer;