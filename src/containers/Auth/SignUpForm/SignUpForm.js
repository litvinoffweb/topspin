import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';



class SignUpForm extends Component {
    render() {
        return(
            <Box>
                <Heading tag='h2'>Sign up</Heading>
                <form>
                    <Box>
                        <Label labelFor='email'>Email :</Label>
                        <Field 
                            name="email"
                            comopnent="input"
                            id="email"
                            />
                    </Box>
                    <Box>
                        <Label labelFor='passward'>Email :</Label>
                        <Field 
                            name="passward"
                            comopnent="input"
                            id="passward"
                            type="passward"
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
})(SignUpForm)