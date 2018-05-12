import React, { Component } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

import { fetchRegisteredPlayers } from '../module/actions';
import PlayerRegistered from '../../../components/PlayerRegistered/PlayerRegistered';
import firebase from 'firebase';
import calculateGroups from '../../../utils/calculateGroups';

class RegisteredPlayers extends Component {

    state = {
        showGroops: false 
    }

    componentWillMount() {
        //console.log('willt', this.props)
    }

    handleTossUp = (registeredPlayers) => {

        const calculated = calculateGroups(registeredPlayers);

        const db = firebase.database();
        db.ref().child('tournaments/' + this.props.match.params.id + '/groups').update({
            groups: calculated
        })
        
        const sortedPlayers = registeredPlayers.sort( (p1, p2) => {
            
            return p2.Rating - p1.Rating
        })
        
        const sortedGroups = (sortedPlayers) => {
            const sorted = sortedPlayers;
            const matrix = [];
                if ( sortedPlayers.length % calculateGroups(registeredPlayers) === 0) {
                    for (let i = 0; i < calculateGroups(registeredPlayers); i++) {
                        const group = [];
                        const chunk = sorted.slice(calculateGroups(registeredPlayers) * i, calculateGroups(registeredPlayers) * (i + 1));
                        group.push(chunk)
                        matrix.push(group);
                    }
                }
                else {
                    for (let i = 0; i < calculateGroups(registeredPlayers) + 1; i++) {
                        const group = [];
                        const chunk = sorted.slice(calculateGroups(registeredPlayers) * i, calculateGroups(registeredPlayers) * (i + 1));
                        group.push(chunk)
                        matrix.push(group);
                    }
                }
                
              
            console.log(matrix);
            return matrix
        }
        const result = sortedGroups(sortedPlayers);
        db.ref().child('tournaments/' + this.props.match.params.id + '/groups').update({
            result
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
                                Registered players :
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
                        
                        <tr><td colSpan='6'><Button style={{width: '170px'}} onClick={() => this.handleTossUp(registeredPlayers)}>TOSS UP</Button></td></tr>
                        
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