import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import { fetchPlayer } from './module/actions';
import Box from 'grommet/components/Box';
import Player from '../Player/Player';
import { getPlayersName, getPlayersAges, getMediumAge, totalSelector } from './module/selectors';




class PlayersList extends Component {

    state = {
        isOpen: true
    }

    componentWillMount() {
        this.props.fetchPlayers();
    }

    
    shouldComponentUpdate(nextProps) {
        if(this.props.players !== nextProps.players) {
            

            return true;
        }
        return false;
    }

    handleClose = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
        //console.log(this.state.isOpen)
        this.props.fetchPlayers();
    }

    render() {
        //console.log(this.props)
        const { players, location, match, userID } = this.props;
        return(
                players ? <Box>
                    <table>
                        <thead>
                        {(userID === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' && location.pathname === `/admin/create_player`) || (userID === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' && location.pathname === `/admin/tournaments/${match.params.id}` )
                            ? <tr><th colSpan={(userID === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' && location.pathname === `/admin/create_player`) ? '6' : '7'} className='th-bg'> Players list : {this.props.players.length}</th><th className='th-bg' onClick={() => this.handleClose()}>-</th></tr> 
                            : null}
                            <tr>
                                <th> # </th>
                                <th><span className='th-span-float-left'>Name</span></th>
                                <th>Age</th>
                                <th>Rating</th>
                                <th>Style</th>
                                <th>Delete</th>
                                {userID === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' && location.pathname === `/admin/tournaments/${match.params.id}` 
                                    ? <th>Add</th> 
                                    : null}
                                {userID === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' 
                                ? <th>Update</th> 
                                : null}
                            </tr>
                            
                        </thead>
                        <tbody>
                            {players.map( (player, index) => {
                                return(
                                    <Player key={index} player={player} {...this.props}/>
                                )
                            
                                }
                            )}
                            
                        </tbody>
                    </table>
                     
                        
            </Box> : 'loading'
        )
    }
}

const mapStateToProps = state => ({
    isLoaded: state.players.isLoaded,
    isFetching: state.players.isFetching,
    players: state.players.players,
    location: state.router.location,
    userID: state.firebase.auth.uid,
    playersName: getPlayersName(state),
    playersAge: getPlayersAges(state),
    totalSelector: totalSelector(state)
})

const mapDispatchToProps = dispatch => ({
    fetchPlayers: () => {
        dispatch(fetchPlayer())
    }
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(PlayersList);