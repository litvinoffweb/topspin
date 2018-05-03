import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'ramda';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';

class CreateTournament extends Component {



    render() {
        return(
            <Box>
                <Form>
                    <Field />
                </Form>
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