import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Group from '../Group/Group';
import firebase from 'firebase';

class GroupsList extends Component {

    getGroups = count => {
        const counts = []
        const db = firebase.database();
            for (let i = 0; i < this.props.groupsCount; i++) {
                let group = []
                db.ref().child('tournaments/' + this.props.match.params.id + '/groups/rendered/').set({
                    i: group
                })

                if (this.props.registeredPlayers.length % this.props.groupsCount === 0) {
                    for(let y = 0; y < this.props.groupsCount; y++) {
                        
                        group.push(this.props.groups[y][i])
                    }
                    
                    
                }
                else {
                    for(let y = 0; y < this.props.groupsCount + 1; y++) {
                       
                       group.push(this.props.groups[y][i])
                    }
                }
                counts.push(<tr key={i}><td key={i} style={{padding: '0px'}}><Group {...this.props} index={i} group={group}/></td></tr>)
    
            }
        
        
        return counts
    }

    render() {
        const {groupsCount} = this.props
        return(
            <Box>
                <table>
                    <thead>
                        <tr>
                            <th className='th-bg'>Groups : {this.props.groupsCount}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getGroups(groupsCount)}

                    </tbody>
                </table>
            </Box>
        )
    }
}

const mapStateToProps = state => ({
    groups: state.groups.groups,
    groupsCount: state.groups.count,
    registeredPlayers: state.registeredPlayers.registeredPlayers
})
const mapDispatchToProps = dispatch => ({
    x: () => {
        console.log('x')
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);