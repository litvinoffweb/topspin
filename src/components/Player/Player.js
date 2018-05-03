import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const Player = props => {

    const { player: {Name, Surname, Rating, Age, Style, id}, user } = props;
    

    return(
        <tr>
            {user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' ? <td> <Field component='input' type='checkbox' name={Name + Surname} onChange={console.log('changed')}/> </td> : <td> - </td>}
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

const withReduxFormPlayer = reduxForm({
    form : 'checked-players'
})(Player)

export default connect(mapStateToProps, null )(withReduxFormPlayer);