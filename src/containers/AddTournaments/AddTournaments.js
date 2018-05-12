import React from 'react';
import TournamentsList from '../../components/TournamentsList/TournamentsList';
import CreateTournament from '../../components/Tournament/Tournament';

import Box from 'grommet/components/Box';


const AddTournaments = props => {
    console.log(props)
    return(
        <Box direction='row'>
            
            <Box>
                <CreateTournament {...props} className='margin-right col-3' />
            </Box>
                       
            <Box>
                <TournamentsList {...props} className='col-9'/>
            </Box>
        </Box>
    )
}

export default AddTournaments;