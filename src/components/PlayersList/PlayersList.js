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

    shouldComponentUpdate(nextProps) {
        if(this.props.players !== nextProps.players) {
            console.log(nextProps)

            return true;
        }
        return false;
    }

    render() {
       //console.log(this.props)
        const { players } = this.props;
        return(
                players ? <Box>
                    <table>
                        <thead>
                            <tr>
                            <th> # </th>
                            <th><span className='th-span-float-left'>Name</span></th>
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
            </Box> : 'loading'
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