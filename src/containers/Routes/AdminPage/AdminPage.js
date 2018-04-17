import React from 'react';
import { withFirebase } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Form from 'grommet/components/Form';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';



import { Field, reduxForm } from 'redux-form';

const AdminPage = props =>  {

        const { admin, firebase: { logout }, handleSubmit } = props
        return (
            <Box>
                {!admin.uid
                     ? <Redirect to='/auth'/> 
                     : <Box direction='row' justify='around'  className='direction_box'>
                            <Box> 
                                <Heading tag="h3" className='h3-style' strong={true}>
                                    Admin : Stanislav
                                </Heading>
                            </Box>
                            <Box>
                                <Button onClick={logout} className='log_out' label='LOGOUT'/>
                            </Box>
                        </Box>}

                <Box >
                    <Form onSubmit={handleSubmit}>
                        <Field className='input-main' name="name" component="input" id="name" placeholder='Name:'/>
                        <Field className='input-main' name="age"  component="input" id="age" placeholder='Age:'/>
                        <Field className='input-main' name="rate" component="input" id="rate" placeholder='Rate:'/>
                        
                        <List align='center'>
                            <ListItem justify='around'>
                                <span> Deffender : </span>
                                <Field className='input-main' name="radio" component="input" id="deffender" type="radio" value="deffender"/>
                            </ListItem>
                            <ListItem justify='around'>
                                <span> Attacker : </span>
                                <Field className='input-main' name="radio" component="input" id="attacker" type="radio" value="attacker"/>
                            </ListItem>
                            <ListItem justify='around'>
                                <span> Classic : </span>
                                <Field className='input-main' name='shake-classic' component='input' id='classic' type='checkbox' value='Classic'/>
                            </ListItem>
                            <ListItem justify='around'>
                                <span> Asian : </span>
                                <Field className='input-main' name='shake-asian' component='input' id='Asian' type='checkbox' value='Asian'/>
                            </ListItem>
                            <ListItem justify='around'>
                                <span> Japan : </span>
                                <Field className='input-main' name='shake-japan' component='input' id='Japan' type='checkbox' value='Japan'/>
                            </ListItem>
                        </List>

                        <Button type='submit' label='ADD PLAYER'/>
                    </Form>
                    
                </Box>
            </Box>
            
        );
};

const reduxAdminPage = reduxForm({
    form: 'add_user'
})(AdminPage);

const mapStateToProps = state => ({
    state: state
})

const withConnect = connect(mapStateToProps, null);

export default compose(
    withFirebase,
    withConnect
)(reduxAdminPage);