import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import { fetchPlayer } from '../PlayersList/module/actions';



import { Field, reduxForm } from 'redux-form';

class CreatePlayer extends Component  {

    componentWillMount() {
        this.props.fetchPlayers();
    }


    redirectAfterLogout = () => {

        this.props.firebase.logout();
        this.props.authLogOut();
        this.props.push('/auth')
    }

    submitAndClearForms = (e) => {

        this.props.handleSubmit();
        this.props.fetchPlayers();
        this.props.reset();
        e.preventDefault();
        
    }

    render() {

        const { admin, authorized } = this.props
        return (
            <Box >
                
                <Box direction='row' justify='around' className='col-12'>
                    <Box direction='row' align='center' justify='center' className='box-shadow'> 
                        <Form onSubmit={this.submitAndClearForms}>
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
                
                
            </Box>
            
        );
    }
};

const reduxCreatePlayer = reduxForm({
    form: 'add_user'

})(CreatePlayer);

const mapStateToProps = (state, ownProps) => ({
    isLoaded: state.players.isLoaded,
    isFetching: state.players.isFetching,
    players: state.players.players,
    route: state.router.location,
    authorized: state.authorized.authorized
})

const mapDispatchToProps = dispatch => ({
    fetchPlayers: () => {
        dispatch(fetchPlayer())
    }
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withFirebase,
    withConnect
)(reduxCreatePlayer);