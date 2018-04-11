import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import emailValidator from 'email-validator';
import ErrorField from '../ErrorField/ErrorField';

class SignUpForm extends Component {

    static propTypes = {

    };

    render() {
        const { handleSignUp } = this.props;
        return(
            <Box>
                <Heading tag='h2'>Sign up</Heading>
                <form onSubmit={handleSignUp}>
                    <Box>
                        <Box>
                            <Label labelFor='email'>Email :</Label>
                            <Field 
                                name="email"
                                component={ErrorField}
                                id="email"
                                />
                        </Box>
                        <Box>
                            <Label labelFor='password'>Password :</Label>
                            <Field 
                                name="password"
                                component={ErrorField}
                                id="password"
                                type="password"
                                />
                        </Box>
                        <Box>
                            <input type="submit"/>
                        </Box>
                    </Box>
                </form>
            </Box>
        )
    }
}

const validate = ({email, password}) => {
    const errors = {};

    if(!email) errors.email = 'email is required';
    else if (!emailValidator.validate(email)) errors.email = 'invalid email';

    if(!password) errors.password = 'password is required';
    // else ( password.length < 8 ) errors.password = 'password must be more than 8 characters';

    return errors;
}


export default reduxForm({
    form: 'auth',
    validate
})(SignUpForm)