import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import Group from '../Group/Group';

class GroupsList extends Component {

    getGroups = count => {
        const counts = []
        
            for (let i = 0; i < this.props.groupsCount; i++) {
                let group = []
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
                
                counts.push(<tr key={i * 3}><td key={i}><Group {...this.props} index={i} group={group}/></td></tr>)
    
            }
        
        
        return counts
    }

    render() {
        //console.log('GroupsList', this.props)
        const {groupsCount} = this.props
        return(
            <Box>
                <table>
                    <thead>
                        <tr>
                            <th className='th-bg'>Groups :</th>
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