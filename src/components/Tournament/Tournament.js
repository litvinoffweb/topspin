import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import firebase from 'firebase';
import { fetchTournaments } from '../TournamentsList/module/actions';
import Button from 'grommet/components/Button';

const Tournament = props => {

    const { tournament: {name, date, current, id}, user, fetchTournament} = props;
    
    const handleUpdate = (id) => {

        const db = firebase.database()
        db.ref().child('tournaments/' + id + '/current/').set(true);
        fetchTournament();
        
        console.log('udate')
    }

    const handleDelete = (id) => {

        const db = firebase.database();   

        db.ref().child('tournaments/' + id + '/').remove();

        fetchTournament();
    }
    

    return(
        <tr>
            {user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' ? <td> <Button onClick={() => handleUpdate(id)}>{current ? 'Finish' : 'Start'}</Button></td> : <td> - </td>}
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
                    <Button className='button-delete' style={{width: '45px', heigth: '45px'}} onClick={() => handleDelete(id)}>
                        x
                    </Button>
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

const withReduxTournament = reduxForm({
    form : 'checked-players'
})(Tournament)

export default connect(mapStateToProps, mapDispatchToProps )(withReduxTournament);