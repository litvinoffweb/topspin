import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import emailValidator from 'email-validator';
import ErrorField from '../../../components/ErrorField/ErrorField';
import { Link } from 'react-router-dom';
import Button from 'grommet/components/Button';
import Form from 'grommet/components/Form';

class SignUpForm extends Component {

    static propTypes = {

    };

    render() {
        const { handleSubmit } = this.props;
        
        return(
            <Box direction='column'
            justify='center'
            align='center'
            wrap={true}
            pad='medium'
            margin='medium'
            className='opacity-bg-sign-form size-sign-form'>

                <Box direction='row' justify='center' className='direction_box'>
                            <Image className='size-img-medium' src='https://pp.userapi.com/c846123/v846123305/2694e/WQPablEfvHc.jpg' alt='/' />
                </Box>
                <Form onSubmit={handleSubmit}>
                    <Box>
                        <Box>
                            <Box>
                                
                                <Field 
                                    name="email"
                                    component={ErrorField}
                                    id="email"
                                    />
                            </Box>
                        </Box>
                        <Box>
                        
                            <Field 
                                name="password"
                                component={ErrorField}
                                type="password"
                                />
                        </Box>
                        <Box direction='row' justify='center'>
                            <Button type='submit' label='SIGN UP' className='submit-btn'/>
                        </Box>
                        <Box  justify='center'>
                                <Image className='size-img-button-small' src='https://www.sahazamarline.com/labs/fbcmp/assets/img/facebook-login-button.png' />
                                <Image className='size-img-button-small' src='http://najdik.com/images/sign-google.png' />
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
})(SignUpForm)