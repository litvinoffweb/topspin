import React, { Component } from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';

class GroupsList extends Component {

    getGroups = count => {
        const counts = []
        for (let i = 0; i < count; i++) {
            console.log(count)
            counts.push(<tr><td>{i}</td></tr>)
                
            
        }
        return counts
    }

    render() {
        console.log(this.props);
        return(
            <Box>
                <table>
                    <thead>
                        <tr>
                            <th className='th-bg'>Groups :</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getGroups(5)}
                    </tbody>
                </table>
            </Box>
        )
    }
}

export default GroupsList;