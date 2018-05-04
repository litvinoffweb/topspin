import React from 'react';
import PlayersList from '../../components/PlayersList/PlayersList';
import CreatePlayer from '../../components/CreatePlayer/CreatePlayer';

import Box from 'grommet/components/Box';


const AddPlayer = props => {
    return(
        <Box className='direction_box' justify='around'>
            <Box>
                <CreatePlayer {...props} className='margin-right'/>
            </Box>
            <Box>
                <PlayersList {...props} />
            </Box>
        </Box>
    )
}

export default AddPlayer;