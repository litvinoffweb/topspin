import React from 'react';
import { connect } from 'react-redux';

const Player = props => {
    
    const { player: {Name, Surname, Rating, Age, Style}, user } = props;
    
    return(
        <tr>
            {user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' ? <td> admin </td> : <td> - </td>}
            <td>
                <span className='td-span-float-left'>{Name} {Surname}</span>
            </td>
            <td>
                {Age}
            </td>
            <td>
                {Rating}
            </td>
            <td>
                {Style}
            </td>
        </tr>
    )
}

const mapStateToProps = state => ({
    user: state.firebase.auth
})

export default connect(mapStateToProps, null )(Player);