import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import SVGIcon from 'grommet/components/SVGIcon';
import MailIcon from 'grommet/components/icons/base/Mail';
import SecureIcon from 'grommet/components/icons/base/Secure';
import Image from 'grommet/components/Image';

import SignOut from '../../../components/SignOut/SignOut';




class SignInForm extends Component {

    render() {
        const { handleSubmit } = this.props;
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
                                <Image className='size-img-button-small' src='https://www.sahazamarline.com/labs/fbcmp/assets/img/facebook-login-button.png' />
                                <Image className='size-img-button-small' src='http://najdik.com/images/sign-google.png' />
                            </Box>
                    </Box>
                </Form>
            </Box>
            
        )
    }
}



// const mapStateToProps = (state, ownProps) => ({
//     auth: state.authorized.authorized,
//     userId: state.authUser.user,
//     location: ownProps
// })

const mapStateToProps = state => ({
    userId: state.firebase.auth.uid,
    auth: state.firebase.profile.isLoaded
})

const reduxSignInForm = reduxForm({
    form: 'auth'
})(SignInForm)

export default connect(mapStateToProps, null)(reduxSignInForm);