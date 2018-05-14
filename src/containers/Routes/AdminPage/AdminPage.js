import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import { fetchPlayer } from '../../../components/PlayersList/module/actions';
import { push } from 'react-router-redux';
import { logOut } from '../../Auth/Authorized/module/actions';
import AddPlayers from '../../AddPlayers/AddPlayers';
import { Link, Route, Switch } from 'react-router-dom';
import CreateTournament from '../../../components/CreateTournament/CreateTournament';
import { createTournament } from '../../../components/CreateTournament/module/actions';
import TournamentsList from '../../../components/TournamentsList/TournamentsList';
import AddTournaments from '../../AddTournaments/AddTournaments';
import { fetchTournaments } from '../../../components/TournamentsList/module/actions';
import PlayersOnTournamentList from '../../PlayersOnTournamentList/PlayersOnTournamentList';


class AdminPage extends Component  {

    componentWillMount() {
        this.props.fetchPlayers();
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

    submitAndClearForms = (e) => {

        this.props.handleSubmit();
        this.props.fetchPlayers();
        this.props.reset();
        e.preventDefault();
        
    }

    render() {
        
        const { admin, location, createTour, match } = this.props
        
        return (
            <Box >
                {!admin
                     ? <Redirect to='/auth'/> 
                     : <Box direction='row' className='direction_box' align='center'>
                            
                            <Box className='col-2'>
                                <Image className='size-img-small' src='https://pp.userapi.com/c846123/v846123305/2694e/WQPablEfvHc.jpg' alt='/' />
                            </Box>
                            <Box className='col-8' direction='row'>
                                <Link to='/admin' className='nav-link-admin'>ADMIN</Link>
                                <Link to='/admin/create_player' className='nav-link-admin'>CREATE PLAYER</Link>
                                <Link to='/admin/create_tournament' className='nav-link-admin'>CREATE TOURNAMENT</Link>
                             </Box>
                            
                            <Box className='col-2'>
                                <Button onClick={e => this.redirectAfterLogout(e)} className='log_out' label='LOGOUT'/>
                            </Box>
                        </Box>}
                    <Box direction='row'>
                        
                        <Box className='col-3'>
                            <Heading tag="h3" className='h3-style' strong={true}>
                                Admin: Stanislav
                            </Heading>
                        </Box>
                    </Box>     
                <Box direction='row' justify='around'>
                    
                    
                    
                    <Box className='col-12'>
                        {location === '/admin/create_player' ? <AddPlayers {...this.props}/> : null}
                        {location === '/admin/create_tournament' ? <Box direction='row'>
                                    <Box className='col-3'><CreateTournament {...this.props} onSubmit={createTour}/> </Box>
                                    
                                    <Box className='col-9'><TournamentsList {...this.props}/></Box>
                            </Box> : null}
                        <Switch>
                            <Route path='/admin/tournaments/:id' component={PlayersOnTournamentList}/>
                        </Switch>
                    </Box>
                </Box>
                
                
            </Box>
            
        );
    }
};


const mapStateToProps = (state, ownProps) => ({
    isLoaded: state.players.isLoaded,
    isFetching: state.players.isFetching,
    players: state.players.players,
    authorized: state.authorized.authorized,
    location: state.router.location.pathname,
    admin: state.firebase.auth.uid,
    tournaments: state.tournaments.tournaments,
    registeredPlayers: state.registeredPlayers.registeredPlayers
    
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
    },
    createTour: values => {
        console.log(values)
        dispatch(createTournament(values.name, values.date))
    },
    fetchTournament: () => {
        dispatch(fetchTournaments());
    }

})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withFirebase,
    withConnect
)(AdminPage);