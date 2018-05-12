import React from 'react';
import Box from 'grommet/components/Box';

const PlayerInGroup = props => {
    const { player: {
        Age, Name, id, facebookID, Surname, Rating, Style
    } } = props;

    return(
        <tr>
            <td>{Name} {Surname}</td>
            <td>{Rating}</td>
            
        </tr>
    )
}

export default PlayerInGroup;