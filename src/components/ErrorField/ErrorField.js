import React from 'react';

import Box from 'grommet/components/Box';

const ErrorField = props => {

    const { input, type, meta: {error, touched} } = props;
    const errorText = touched && error && <div style={{color: '#00B8D4'}}>{error}</div>

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