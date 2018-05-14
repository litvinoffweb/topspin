import React from 'react';
import Box from 'grommet/components/Box';

const DefaultValue = props => {

    console.log('DefaultValue', props)
    return(
        <Box>
            <input 
                type='text'
                value='aaa'
            />
        </Box>
    )
}

export default DefaultValue;