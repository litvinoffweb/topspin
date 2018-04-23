import React from 'react';

const Player = props => {
    
    const { player: {Name, Surname, Rating, Age, Style} } = props;
    
    return(
        <tr>
            <td>
                {Name} {Surname}
            </td>
            <td>
                {Rating}
            </td>
            <td>
                {Age}
            </td>
            <td>
                {Style}
            </td>
        </tr>
    )
}

export default Player;