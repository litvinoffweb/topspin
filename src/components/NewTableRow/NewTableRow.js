import React from 'react';
import TableRow from 'grommet/components/TableRow';

const NewTableRow = props => {
    const { player: {Name, Surname, Rating, Age, Style} } = props;
    return(
        <TableRow>
            <td>
                1{Name} {Surname}
            </td>
            <td>
                2{Rating}
            </td>
            <td>
                3{Age}
            </td>
            <td>
                4{Style}
            </td>
        </TableRow>
    )
}

export default NewTableRow;