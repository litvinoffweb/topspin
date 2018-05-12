import React, { Component } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

import { 
    fetchRegisteredPlayers, 
    sortByNameRegisteredPlayers, 
    sortByRatingRegisteredPlayers, 
    sortByAgeRegisteredPlayers 
        } from '../module/actions';
import PlayerRegistered from '../../../components/PlayerRegistered/PlayerRegistered';
import firebase from 'firebase';
import calculateGroups from '../../../utils/calculateGroups';

class RegisteredPlayers extends Component {

    state = {
        showGroups: false
    }

    componentWillMount() {
        //console.log('willt', this.props)
    }

    handleTossUp = (registeredPlayers) => {

        const countGroups = calculateGroups(registeredPlayers);

        const db = firebase.database();
        db.ref().child('tournaments/' + this.props.match.params.id + '/groups').update({
            groups: countGroups
        })
        
        const sortedPlayers = registeredPlayers.sort( (p1, p2) => {
            
            return p2.Rating - p1.Rating
        })
        
        const sortedGroups = (sortedPlayers) => {
            const sorted = sortedPlayers;
            const matrix = [];
                if ( sortedPlayers.length % countGroups === 0) {
                    for (let i = 0; i < countGroups; i++) {
                        const group = [];
                        const chunk = sorted.slice(countGroups * i, countGroups * (i + 1));
                        group.push(chunk)
                        matrix.push(group);
                    }
                }
                else {
                    for (let i = 0; i < countGroups + 1; i++) {
                        const group = [];
                        const chunk = sorted.slice(countGroups * i, countGroups * (i + 1));
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
        this.setState({
            showGroups: !this.state.showGroups
        })

    }

    handleSortByName = (players, tourID) => {
        const db = firebase.database();
    
        const sortedByName = players.sort((p1, p2) => {
            
            return p1.Name > p2.Name
        })
        console.log(players)
        console.log(sortedByName)
        db.ref().child('tournaments/' + tourID + '/players').update({
            sortedByName
        })
        this.props.fetchRegisteredPlayerss(tourID);
        
    }

    render() {
        
        const {registeredPlayers, sortByNameRegisteredPlayerss, sortByRatingRegisteredPlayerss, sortByAgeRegisteredPlayerss} = this.props
        
        return(
            this.state.showGroups ? <Button onClick={() => this.setState({ showGroups: !this.state.showGroups})}> Toggle </Button> : <Box direction='row'>
                <table>
                    <thead>
                        <tr>
                            <th colSpan='6' className='th-bg'>
                                Registered players :
                            </th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th className='th-pointer' onClick={() => sortByNameRegisteredPlayerss(registeredPlayers)}>Name</th>
                            <th className='th-pointer' onClick={() => sortByAgeRegisteredPlayerss(registeredPlayers)}>Age</th>
                            <th className='th-pointer' onClick={() => sortByRatingRegisteredPlayerss(registeredPlayers)}>Rating</th>
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
    },
    sortByNameRegisteredPlayerss: players => {
        dispatch(sortByNameRegisteredPlayers(players))
    },
    sortByRatingRegisteredPlayerss: players => {
        dispatch(sortByRatingRegisteredPlayers(players))
    },
    sortByAgeRegisteredPlayerss: players => {
        dispatch(sortByAgeRegisteredPlayers(players))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredPlayers);