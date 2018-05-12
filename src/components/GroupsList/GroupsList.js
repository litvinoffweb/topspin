import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';

class GroupsList extends Component {

    getGroups = count => {
        const counts = []
        for (let i = 0; i < count; i++) {
            
            counts.push(<tr key={i * 3}><td key={i}>{i}</td></tr>)
                
            
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
    groupsCount: state.groups.count
})
const mapDispatchToProps = dispatch => ({
    x: () => {
        console.log('x')
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);