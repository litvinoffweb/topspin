import React, { Component } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

import { fetchRegisteredPlayers } from '../module/actions';
import PlayerRegistered from '../../../components/PlayerRegistered/PlayerRegistered';
import firebase from 'firebase';

class RegisteredPlayers extends Component {

    componentWillMount() {
        //console.log('willt', this.props)
    }

    handleTossUp = () => {
        const db = firebase.database();
        db.ref().child('tournaments/' + this.props.match.params.id + '/groups').update({
            groups: ''
        })
    }
    render() {
        
        const {registeredPlayers} = this.props
        
        return(
            <Box direction='row'>
                <table>
                    <thead>
                        <tr>
                            <th colSpan='6' className='th-bg'>
                                Registered players:
                            </th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Age</th>
                            <th>Style</th>
                            <th>Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {registeredPlayers.map( (player, index) => {
                            return(
                                <PlayerRegistered key={index} player={player} {...this.props}/>
                            )
                        })}
                        
                        <tr><td colSpan='6'><Button style={{width: '170px'}} onClick={() => this.handleTossUp()}>TOSS UP</Button></td></tr>
                       
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