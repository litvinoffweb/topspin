import React from 'react';

import { NavLink } from 'react-router-dom'

import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

const AuthComponent = props => {
    return(
        <Box>
            <Box justify='center' direction='row' className='direction_box '>
                    {(props.location.pathname == '/auth') ? <Image src='https://pp.userapi.com/c846123/v846123305/2694e/WQPablEfvHc.jpg' className='size-img-large'/> : ''}
                </Box>
                <Box>
                    
                    <Heading tag="h1" uppercase={true} strong ={true} className='h1-color'>
                        Auth Page
                    </Heading>
                    <Box direction='row' justify='center' className='direction_box'>
                            <NavLink to='/auth/signin' className='nav-link' activeStyle={{backgroundColor : '#E65100', color: '#fff'}}> SIGN IN </NavLink>
                            <NavLink to='/auth/signup' className='nav-link' activeStyle={{backgroundColor : '#E65100', color: '#fff'}}> SIGN UP </NavLink>
                    </Box>
                </Box>
        </Box>
    )
}

export default AuthComponent;