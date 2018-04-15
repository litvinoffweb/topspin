import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';


class SignInForm extends Component {

    render() {
        console.log(this.props.userId, 'luserId')
        const { handleSubmit } = this.props;
        return(
            <Box direction='column'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='medium'
            className='opacity-bg-sign-form size-sign-form'>
                <Heading tag='h2' uppercase={true} strong ={true}>Sign in</Heading>
                <Form onSubmit={handleSubmit}>
                   <Box >
                            <Box>
                                <Label labelFor='email'>Email :</Label>
                                <Field 
                                    className='input-main'
                                    name="email"
                                    component="input"
                                    id="email"
                                    />
                            </Box>
                            <Box>
                                <Label labelFor='password'>Password :</Label>
                                <Field 
                                    className='input-main'
                                    name="password"
                                    component="input"
                                    id="password"
                                    type="password"
                                    />
                            </Box>
                            <Box direction='row' justify='center'>
                                <Button type='submit' label='SIGN IN' className='submit-btn'/>
                            </Box>
                            {this.props.auth ? this.props.userId : 'not auth'}
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