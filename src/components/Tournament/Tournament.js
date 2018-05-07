import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import firebase from 'firebase';
import { fetchTournaments } from '../TournamentsList/module/actions';

const Tournament = props => {

    const { tournament: {name, date, current, id}, user, fetchTournament} = props;
    
    console.log(current, 'current')
    const handleDelete = (id) => {

        console.log('id = ', id);

        const db = firebase.database();   

        db.ref().child('tournaments/' + id + '/').remove();

        fetchTournament();
    }
    

    return(
        <tr>
            {user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' ? <td> <Field component='input' type='checkbox' name={name} /> </td> : <td> - </td>}
            <td>
                <span className='td-span-float-left'>{name}</span>
            </td>
            <td>
                {date}
            </td>
            <td>
                {current.toString()}
            </td>
            
                {user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' ? 
                <td>
                    <button onClick={() => handleDelete(id)}>
                        x
                    </button>
                 </td> :
                 <td>
                     :P
                </td> 
            }
            
        </tr>
    )
}

const mapStateToProps = state => ({
    user: state.firebase.auth
})

const mapDispatchToProps = dispatch => ({
    fetchTournament: () => {
        dispatch(fetchTournaments())
    }
})

const withReduxFormPlayer = reduxForm({
    form : 'checked-players'
})(Tournament)

export default connect(mapStateToProps, mapDispatchToProps )(withReduxFormPlayer);