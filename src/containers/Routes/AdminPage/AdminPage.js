import React from 'react';
import { withFirebase } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import { validatePlayer } from '../../../utils/validate';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import ErrorField from '../../../components/ErrorField/ErrorField';
import PlayersList from '../../../components/PlayersList/PlayersList';




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
                <Box direction='row' justify='around'>
                    <Box >
                        <Form onSubmit={handleSubmit}>
                            <Field className='input-main' name="Name" component="input" id="name" placeholder='Name:'/>
                            <Field className='input-main' name="Surname" component="input" id="surname" placeholder='Surname:'/>
                            <Field className='input-main' name="Age"  component="input" id="age" placeholder='Age:'/>
                            <Field className='input-main' name="Rating" component="input" id="rate" placeholder='Rate:'/>
                            
                            <List align='center'>
                                <ListItem align='center' justify='between'>
                                    <span> Deffender : </span>
                                    <Field className='input-main' name="Style" component="input" id="defender" type="radio" value="defender"/>
                                </ListItem>
                                <ListItem align='center' justify='between'>
                                    <span> Attacker : </span>
                                    <Field className='input-main' name="Style" component="input" id="attacker" type="radio" value="attacker"/>
                                </ListItem>
                                <ListItem align='center' justify='between'>
                                    <span> Classic : </span>
                                    <Field className='input-main' name='Classic' component='input' id='classic' type='checkbox' />
                                </ListItem>
                                <ListItem align='center' justify='between'>
                                    <span> Asian : </span>
                                    <Field className='input-main' name='Asian' component='input' id='Asian' type='checkbox' />
                                </ListItem>
                                <ListItem align='center' justify='between'>
                                    <span> Japan : </span>
                                    <Field className='input-main' name='Japan' component='input' id='Japan' type='checkbox' />
                                </ListItem>
                            </List>

                            <Button type='submit' label='ADD PLAYER'/>
                        </Form>
                        
                    </Box>
                </Box>
                <PlayersList />
                
            </Box>
            
        );
};

const reduxAdminPage = reduxForm({
    form: 'add_user',
    validatePlayer

})(AdminPage);

const mapStateToProps = state => ({
    state: state
})

const withConnect = connect(mapStateToProps, null);

export default compose(
    withFirebase,
    withConnect
)(reduxAdminPage);