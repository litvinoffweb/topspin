import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';

class SignInForm extends Component {

    render() {
        
        const { handleSubmit } = this.props;
        return(
            <Box direction='column'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='medium'>
                <Heading tag='h2'>Sign in</Heading>
                <form onSubmit={handleSubmit}>
                   <Box >
                            <Box>
                                <Label labelFor='email'>Email :</Label>
                                <Field 
                                    name="email"
                                    component="input"
                                    id="email"
                                    />
                            </Box>
                            <Box>
                                <Label labelFor='password'>Password :</Label>
                                <Field 
                                    name="password"
                                    component="input"
                                    id="password"
                                    type="password"
                                    />
                            </Box>
                            <Box>
                                <input type="submit"/>
                            </Box>
                            {this.props.auth ? 'auth' : 'not auth'}
                    </Box>
                </form>
            </Box>
        )
    }
}



const mapStateToProps = state => ({
    auth: state.authorized.authorized,
    userId: state.authUser.user
})

const reduxSignInForm = reduxForm({
    form: 'auth'
})(SignInForm)

export default connect(mapStateToProps, null)(reduxSignInForm);