import React, { Component } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box'
import { fetchRegisteredPlayers } from '../module/actions';
import PlayerRegistered from '../../../components/PlayerRegistered/PlayerRegistered'

class RegisteredPlayers extends Component {

    componentWillMount() {
        //console.log('willt', this.props)
    }

    render() {
        //console.log('render',this.props)
        const {registeredPlayers} = this.props
        return(
            <Box>
                <table>
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Age</th>
                        <th>Style</th>
                        <th>Delete </th>
                        
                    </thead>
                    <tbody>
                        {registeredPlayers.map( (player, index) => {
                            return(
                                <PlayerRegistered key={index} player={player} {...this.props}/>
                            )
                        })}
                    </tbody>
                </table>
            </Box>
        )
    }
}

const mapStateToProps = state => ({
    registeredPlayers: state.registeredPlayers.registeredPlayers
});

const mapDispatchToProps = dispatch => ({
    fetchRegisteredPlayerss: id => {
        dispatch(fetchRegisteredPlayers(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredPlayers);