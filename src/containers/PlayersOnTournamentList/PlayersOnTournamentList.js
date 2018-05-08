import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import PlayersList from '../../components/PlayersList/PlayersList';
import RegisteredPlayers from './component/RegisteredPlayers';
import { fetchRegisteredPlayers } from './module/actions';

class PlayersOnTournamentList extends Component {

        componentWillMount() {
            this.props.fetchRegisteredPlayerss(this.props.match.params.id);
        }

        render() {
            return(
                <Box direction='row'>
                    <Box className='col-6'><RegisteredPlayers /></Box>
                    <Box className='col-6'><PlayersList {...this.props}/></Box>
                    
                </Box>
                
            )
        }
}

const mapStateToProps = state => ({
    registeredPlayers: state.registeredPlayers.players
});

const mapDispatchToProps = dispatch => ({
    fetchRegisteredPlayerss: id => {
        dispatch(fetchRegisteredPlayers(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayersOnTournamentList);