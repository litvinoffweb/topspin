import React from 'react';

import Box from 'grommet/components/Box';

const ErrorField = props => {

    const { input, type, meta: {error, touched} } = props;
    const errorText = touched && error && <div style={{color: '#E65100'}}>{error}</div>
    console.log(props, 'errorField')
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