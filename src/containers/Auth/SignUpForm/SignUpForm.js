import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { validate } from '../../../utils/validate';

import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Button from 'grommet/components/Button';
import Form from 'grommet/components/Form';

import ErrorField from '../../../components/ErrorField/ErrorField';


const SignUpForm = props => {

        const { handleSubmit } = props;
        
        return(
            <Box direction='column'
            justify='center'
            align='center'
            wrap={true}
            pad='medium'
            margin='medium'
            className='opacity-bg-sign-form size-sign-form'>
  
                <Form onSubmit={handleSubmit}>
                    <Box>
                        <Box>
                            <Box>
                                <Box direction='row' justify='center' className='direction_box'>
                                    <Image className='size-img-medium' src='https://pp.userapi.com/c846123/v846123305/2694e/WQPablEfvHc.jpg' alt='/' />
                                </Box>
                                
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
                                {/* <Image className='size-img-button-small' src='https://www.sahazamarline.com/labs/fbcmp/assets/img/facebook-login-button.png' />
                                <Image className='size-img-button-small' src='http://najdik.com/images/sign-google.png' /> */}
                        </Box>
                    </Box>
                </Form>
            </Box>
        )
}


export default reduxForm({
    form: 'auth',
    validate
})(SignUpForm)