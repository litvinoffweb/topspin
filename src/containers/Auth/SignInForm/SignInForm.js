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
            margin='medium'>
                <Heading tag='h2'>Sign in</Heading>
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
                            <Box>
                                <Button type='submit' label='Submit' className='submit-btn'/>
                            </Box>
                            {this.props.auth ? 'auth' : 'not auth'}
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
    userId: state.authUser.user,
    auth: state.authorized.authorized
})

const reduxSignInForm = reduxForm({
    form: 'auth'
})(SignInForm)

export default connect(mapStateToProps, null)(reduxSignInForm);