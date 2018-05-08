import React, { Component } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box'

class RegisteredPlayers extends Component {

    render() {
        console.log(this.props)
        const {Name, Surname, Age, Style, facebookID, Rating} = this.props
        return(
            <Box>
                <table>
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Rating</th>
                        <th>Age</th>
                        <th>Style</th>
                        <th>{this.props.registeredPlayers ? this.props.registeredPlayers.length : ''}</th>
                        
                    </thead>
                </table>
            </Box>
        )
    }
}

export default RegisteredPlayers;