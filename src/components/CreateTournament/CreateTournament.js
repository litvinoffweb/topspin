import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'ramda';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import Heading from 'grommet/components/Heading';

class CreateTournament extends Component {

    createTournament = (e) => {
        console.log('send !')
        this.props.handleSubmit();
        e.preventDefault();
    }

    render() {
        return(
            <Box direction='row'>
                <Box className='col-1'>
                </Box>
                <Box className='col-10'>
                    <Form onSubmit={this.createTournament} className='create-tournament'>
                        <Heading tag='h2'>NEW TOURNAMENT</Heading>
                        <Field component='input' type='text' name='name' className='input-main input-tournament' style={{width: '100%'}} placeholder='Name:'/>
                        <Field component='input' type='date' name='date' className='input-main input-tournament' style={{width: '100%'}} placeholder='New tournament:'/>
                        <Button type='submit' label='CREATE' />
                    </Form>
                </Box>
            </Box>
        )
    }
}

const withReduxFormTournament = reduxForm({
    form: 'new-tournament'
})(CreateTournament);

const mapDispatchToProps = dispatch => ({
    x: () => {
        dispatch();
    }
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(withReduxFormTournament);