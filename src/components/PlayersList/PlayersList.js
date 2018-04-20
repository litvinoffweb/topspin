import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';

import Box from 'grommet/components/Box';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Thead from '../Thead/Thead';
import NewTableRow from '../NewTableRow/NewTableRow';

import { fetchPlayer } from './module/actions';


class PlayersList extends Component {

    componentWillMount() {
        this.props.fetchPlayers();
        //console.log(this.props, 'will mount')
        //console.log(this.props.players, 'players will')
    }

    componentDidMount() {
        //console.log(this.props, ' did mount');
    }
    

    render() {
       // console.log(this.props, 'render')
        const { isLoaded, players, isFetching } = this.props;
        return(
            <Box>
                <table>
                    <thead >
                        <tr><th>Name</th>
                        <th>Age</th>
                        <th>Rating</th>
                        <th>Style</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {players.map( (player) => {
                            return(
                                <tr key={player.Name + player.Surname + player.Raiting}>
                                    <td className='td-float-left' key={player.Name + player.Surname}>
                                        {player.Name} {player.Surname}
                                    </td>
                                    <td key={player.Age + player.Surname}>
                                        {player.Age}
                                    </td>
                                    <td key={player.Rating + player.Surname}>
                                        {player.Rating}
                                    </td>
                                    <td key={player.Style + player.Surname }>
                                        {player.Style}
                                    </td>
                                </tr>
                            )
                        
                            }
                        )}
                    </tbody>
                </table>
                {/* <Table>
                    <Thead />
                        <tbody>
                            {players.map( (player, index) => {
                                return(
                                    <NewTableRow key={index} player={player} {...this.props} />
                                            
                                    )
                            })}
                        </tbody>
                </Table> */}
           </Box> 
            
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