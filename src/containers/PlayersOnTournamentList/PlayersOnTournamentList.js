import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';


class PlayersOnTournamentList extends Component {

        render() {
            console.log(this.props)
            return(
                <Box>
                    
                    {this.props.match.params.id}
                </Box>
            )
        }
}

export default PlayersOnTournamentList;