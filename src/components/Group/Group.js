import React from 'react';
import Box from 'grommet/components/Box';

const Group = props => {
    const { index } = props
    return(
        <Box>
            <table>
                <thead>
                    <tr>
                        <th>{ index + 1 }</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    )
}

export default Group;