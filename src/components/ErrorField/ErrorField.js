import React from 'react';

import Box from 'grommet/components/Box';

const ErrorField = props => {

    const { input, input: { name }, type, meta: {error, touched} } = props;
    const errorText = touched && error && <div style={{color: '#E65100'}}>{error}</div>
    
    return(
        <Box>
            <input
                className='input-main'
                {...input}
                type={type}
                placeholder={name}
                />
                {errorText}    
        </Box>
    )
}

export default ErrorField;  