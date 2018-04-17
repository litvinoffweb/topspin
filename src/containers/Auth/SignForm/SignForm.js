import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import emailValidator from 'email-validator';
import ErrorField from '../../../components/ErrorField/ErrorField';
import { Link } from 'react-router-dom';
import Button from 'grommet/components/Button';
import Form from 'grommet/components/Form';

class SignForm extends Component {

    static propTypes = {

    };

    render() {
        const { handleSubmit, ErrorField } = this.props;
        
        return(
            <Box direction='column'
            justify='center'
            align='center'
            wrap={true}
            pad='medium'
            margin='medium'
            className='opacity-bg-sign-form size-sign-form'>
                <Heading tag='h2' uppercase={true} strong ={true} className='h2-color'>Sign up</Heading>
                <Form onSubmit={handleSubmit}>
                    <Box>
                        <Box>
                            <Box>
                                <Heading tag='h6' >Email </Heading>
                                <Field 
                                    name="email"
                                    component={ErrorField}
                                    id="email"
                                    />
                            </Box>
                        </Box>
                        <Box>
                            <Field
                                placeholder='email'
                                name="password"
                                component={ErrorField}
                                type="password"
                                />
                        </Box>
                        <Box direction='row' justify='center'>
                            <Button type='submit' label='SIGN UP' className='submit-btn'/>
                        </Box>
                    </Box>
                </Form>
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
})(SignForm)