import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

class UnAuthorized extends Component {

    render() {
        return (
            <Box>
                <Heading tag='h1'>
                    Unauthorized, please 
                    <Link to="/auth/signin">
                        Sign In
                    </Link>
                </Heading>
            </Box>
        );
    };
};

export default UnAuthorized;