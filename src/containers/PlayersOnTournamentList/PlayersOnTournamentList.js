import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';

import PlayersList from '../../components/PlayersList/PlayersList';
import GroupsList from '../../components/GroupsList/GroupsList';

import RegisteredPlayers from './component/RegisteredPlayers';
import { fetchRegisteredPlayers } from './module/actions';
import { fetchPlayer } from '../../components/PlayersList/module/actions';
class PlayersOnTournamentList extends Component {

        componentWillMount() {
            this.props.fetchRegisteredPlayerss(this.props.match.params.id);
            this.props.fetchPlayerss();
        }

        render() {
            //console.log(this.props, 'players on ')
            return(
                <Box>
                    
                    <Box direction='row'>
                        <Box className='col-6'>
                            <GroupsList {...this.props}/>
                            <RegisteredPlayers {...this.props}/>
                        </Box>
                        

                        <Box className='col-6'>
                            <Box>Search: </Box>
                            <PlayersList {...this.props}/>
                        </Box>
                    </Box>
                </Box>
                
            )
        }
}

const mapStateToProps = state => ({
    registeredPlayers: state.registeredPlayers.registeredPlayers,
    players: state.players.players
});

const mapDispatchToProps = dispatch => ({
    fetchRegisteredPlayerss: id => {
        dispatch(fetchRegisteredPlayers(id))
    },
    fetchPlayerss: () => {
        dispatch(fetchPlayer())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayersOnTournamentList);