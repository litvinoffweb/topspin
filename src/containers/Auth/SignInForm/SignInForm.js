import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';


const SignInForm = props => {

        const { handleSubmit } = props;
        return(
            <Box
            align='center'
            wrap={true}
            pad='medium'
            margin='large'
            className='opacity-bg-sign-form size-sign-form'
            responsive={true}>

                <Form onSubmit={handleSubmit}>
                   <Box >
                        <Box direction='row' justify='center' className='direction_box'>
                            <Image className='size-img-medium' src='https://pp.userapi.com/c846123/v846123305/2694e/WQPablEfvHc.jpg' alt='/' />
                        </Box>
                         <Box>
                            <Field 
                                className='input-main'
                                name="email"
                                component="input"
                                id="email"
                                />
                        </Box>
                        <Box>

                            <Field 
                                className='input-main'
                                name="password"
                                component="input"
                                id="password"
                                type="password"
                                />
                        </Box>
                        <Box>
                            <Button type='submit' label='LOGIN' className='submit-btn'/>
                        </Box>
                        <Box justify='center'>
                            <Image className='size-img-button-small' src='https://www.sahazamarline.com/labs/fbcmp/assets/img/facebook-login-button.png' alt='facebook'/>
                            <Image className='size-img-button-small' src='http://najdik.com/images/sign-google.png' alt='google'/>
                        </Box>
                    </Box>
                </Form>
            </Box>
            
        )
}


const mapStateToProps = state => ({
    userId: state.firebase.auth.uid,
    auth: state.firebase.profile.isLoaded
})

const reduxSignInForm = reduxForm({
    form: 'auth'
})(SignInForm)

export default connect(mapStateToProps, null)(reduxSignInForm);