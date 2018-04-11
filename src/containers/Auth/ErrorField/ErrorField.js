import React from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';




const ErrorField = props => {
    return(
        <Box>
            <Label labelFor='error_field'>
                <input id='error_field'/>
            </Label>
        </Box>
    )
}

export default ErrorField;