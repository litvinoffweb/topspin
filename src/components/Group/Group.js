import React from 'react';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import PlayerInGroup from '../PlayerInGroup/PlayerInGroup';

const Group = props => {
    const { index, Age, Name, Rating, Style, Surname, id, facebookID, group } = props
    console.log('Group', props)
    return(
        <Box>
            <table>
                <thead>
                    <tr>
                        <th><span className='td-span-float-left'>Group : { index + 1 }</span></th>
                        <th>Rating : </th>
                    </tr>
                </thead>
                <tbody>
                    {group.map( (player, index) => {
                        return(
                            <PlayerInGroup player={player} key={index} {...this.props}/>
                        )
                    })}
                </tbody>
            </table>
        </Box>
    )
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps, null)(Group);