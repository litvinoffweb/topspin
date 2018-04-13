import React from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';




const ErrorField = props => {


    const { input, type, meta: {error, touched} } = props;
    const errorText = touched && error && <div style={{color: 'red'}}>{error}</div>

    return(
        <Box>
            
                <input
                    className='input-main'
                    {...input}
                    type={type}
                    />
                    {errorText}
            
        </Box>
    )
}

export default ErrorField;  