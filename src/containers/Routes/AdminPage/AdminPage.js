import React, { Component } from 'react';
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
import Image from 'grommet/components/Image';
import ListItem from 'grommet/components/ListItem';
import ErrorField from '../../../components/ErrorField/ErrorField';
import PlayersList from '../../../components/PlayersList/PlayersList';
import { fetchPlayer } from '../../../components/PlayersList/module/actions';
import { push } from 'react-router-redux';
import { logOut } from '../../Auth/Authorized/module/actions';



import { Field, reduxForm } from 'redux-form';

class AdminPage extends Component  {
    
    state = {
        playersListOpen: false
    }

    componentWillMount() {
        this.props.fetchPlayers();
       // console.log(this.props, 'will mount')
    }

    componentDidMount() {
       // console.log(this.props, 'did mount admin')
    }
    
    togglePlayersList = () => {
        this.setState({
            playersListOpen: !this.state.playersListOpen
        })
    }

    redirectAfterLogout = () => {

        this.props.firebase.logout();
        this.props.authLogOut();
        this.props.push('/auth')
    }

    componentWillUnmount() {
       // console.log('will unmount', this.props)
       push('/auth');
    }

    render() {
        //console.log(this.props, ' render adminpage')
        const { admin, firebase: { logout }, handleSubmit, isLoaded, isFetching, authorized } = this.props
        return (
            <Box>
                {!admin.uid && !authorized
                     ? <Redirect to='/auth'/> 
                     : <Box direction='row' justify='around'  className='direction_box'>
                            <Box>
                            <Image className='size-img-small' src='https://pp.userapi.com/c846123/v846123305/2694e/WQPablEfvHc.jpg' alt='/' />
                                
                            </Box>
                            <Box>
                                <Button onClick={this.redirectAfterLogout} className='log_out' label='LOGOUT'/>
                            </Box>
                        </Box>}
                <Box>
                    <Heading tag="h3" className='h3-style' strong={true}>
                        Admin : Stanislav
                    </Heading>
                </Box>
                <Box direction='row' justify='around'>
                    <Box direction='row' align='center' justify='center' className='box-shadow'> 
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
                    <Box>
                        <Button className='btn-toggle-list' onClick={this.togglePlayersList} label={!this.state.playersListOpen ? 'OPEN PLAYERS LIST': 'CLOSE PLAYERS LIST'}/>
                        {this.state.playersListOpen ? <PlayersList /> : ''}
                    </Box>
                </Box>
                
                
            </Box>
            
        );
    }
};

const reduxAdminPage = reduxForm({
    form: 'add_user',
    validatePlayer

})(AdminPage);

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
    },
    push: path => {
        dispatch(push(path))
    },
    authLogOut: () => {
        dispatch(logOut())
    }
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withFirebase,
    withConnect
)(reduxAdminPage);