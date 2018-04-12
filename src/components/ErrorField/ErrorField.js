import React from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';




const ErrorField = props => {


    const { input, type, meta: {error, touched} } = props;
    const errorText = touched && error && <div style={{color: 'red'}}>{error}</div>

    return(
        <Box>
            <Label>
                {input.name}
                <input
                    {...input}
                    type={type}
                    />
                    {errorText}
            </Label>
        </Box>
    )
}

export default ErrorField;  