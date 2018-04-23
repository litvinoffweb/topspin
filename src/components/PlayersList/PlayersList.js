import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import { fetchPlayer } from './module/actions';
import Box from 'grommet/components/Box';
import Player from '../Player/Player';




class PlayersList extends Component {

    componentWillMount() {
        this.props.fetchPlayers();
    }

    render() {
       console.log('render players list')
        const { players } = this.props;
        return(
            players.length > 0 
                ? <Box>
                    <table>
                        <thead >
                            <tr><th>Name</th>
                            <th>Age</th>
                            <th>Rating</th>
                            <th>Style</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {players.map( (player, index) => {
                                return(
                                    <Player key={index} player={player}/>
                                )
                            
                                }
                            )}
                        </tbody>
                    </table>
            </Box> 
            : 'Not loaded...'
        )
    }
}

const mapStateToProps = state => ({
    isLoaded: state.players.isLoaded,
    isFetching: state.players.isFetching,
    players: state.players.players
})

const mapDispatchToProps = dispatch => ({
    fetchPlayers: () => {
        dispatch(fetchPlayer())
    }
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(PlayersList)