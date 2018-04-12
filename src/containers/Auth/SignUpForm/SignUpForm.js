import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import emailValidator from 'email-validator';
import ErrorField from '../../../components/ErrorField/ErrorField';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {

    static propTypes = {

    };

    render() {
        const { handleSubmit } = this.props;
        
        return(
            <Box direction='column'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='medium'>
                <Heading tag='h2'>Sign up</Heading>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <Box>
                            
                            <Field 
                                name="email"
                                component={ErrorField}
                                id="email"
                                />
                        </Box>
                        <Box>
                            
                            <Field 
                                name="password"
                                component={ErrorField}
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
    else if ( password.length < 8 ) errors.password = 'password must be more than 8 characters';

    return errors;
}


export default reduxForm({
    form: 'auth',
    validate
})(SignUpForm)