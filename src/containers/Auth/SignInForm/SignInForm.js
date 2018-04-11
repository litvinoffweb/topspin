import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';



class SignInForm extends Component {

    static propTypes = {

    };

    render() {
        return(
            <Box>
                <Heading tag='h2'>Sign in</Heading>
                <form>
                    <Box>
                        <Label labelFor='email'>Email :</Label>
                        <Field 
                            name="email"
                            component="input"
                            id="email"
                            />
                    </Box>
                    <Box>
                        <Label labelFor='password'>Email :</Label>
                        <Field 
                            name="password"
                            component="input"
                            id="password"
                            type="password"
                            />
                    </Box>
                    <Box>
                        <input type="submit"/>
                    </Box>
                </form>
            </Box>
        )
    }
}



export default reduxForm({
    form: 'auth'
})(SignInForm)