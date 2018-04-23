import React from 'react';
import {Link} from 'react-router-dom';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

const UnAuthorized = props => {

        return (
            <Box>
                <Heading tag='h2'>
                    Unauthorized, please 
                    <Link to="/auth/signin" className='nav-link' style={{color: '#fff'}}>
                        Sign In
                    </Link>
                </Heading>
            </Box>
        );
};

export default UnAuthorized;