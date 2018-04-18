import React from 'react';
import TableRow from 'grommet/components/TableRow';

const NewTableRow = props => {
    const { player: {Name, Surname, Rating, Age, Style} } = props;
    return(
        <TableRow>
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
        </TableRow>
    )
}

export default NewTableRow;