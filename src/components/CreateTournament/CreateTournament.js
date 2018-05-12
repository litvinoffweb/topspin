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
        this.props.handleSubmit();
        this.props.reset();
        e.preventDefault();
        
    }

    render() {
        return(
            <Box>
               
                <table style={{width: '280px'}}>
                    <thead>
                        <tr>
                            <th className='th-bg' style={{width: '250px'}}>Create tournament : </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{paddingLeft: '0px' , paddingRight: '0px'}}>
                                
                                    <Form onSubmit={this.createTournament} className='create-tournament'>
                                        {/* <Heading tag='h2'>NEW TOURNAMENT</Heading> */}
                                        <Field component='input' type='text' name='name' className='input-main input-tournament' style={{width: '100%', marginRight: '0px'}} placeholder='Name:'/>
                                        <Field component='input' type='date' name='date' className='input-main input-tournament' style={{width: '100%', marginRight: '0px'}} placeholder='New tournament:'/>
                                        <Button type='submit' label='CREATE' style={{marginRight: '0px'}}/>
                                    </Form>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </Box>
        )
    }
}

const withReduxFormTournament = reduxForm({
    form: 'new-tournament'
})(CreateTournament);


const withConnect = connect(null, null);

export default compose(withConnect)(withReduxFormTournament);