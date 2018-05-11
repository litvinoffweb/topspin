import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import firebase from 'firebase';
import { fetchTournaments } from '../TournamentsList/module/actions';
import Button from 'grommet/components/Button';
import { Link } from 'react-router-dom';
import PlayersList from '../PlayersList/PlayersList';
import { fetchRegisteredPlayers } from '../../containers/PlayersOnTournamentList/module/actions';

const Tournament = props => {

    const { tournament: {name, date, current, id}, user, fetchTournament, pathname, location, fetchRegisteredPLayerss} = props;

    const handleUpdate = (id) => {
        const db = firebase.database()
        current ? db.ref().child('tournaments/' + id + '/current/').set(false) 
                : db.ref().child('tournaments/' + id + '/current/').set(true);
        fetchTournament();
    }

    const handleDelete = (id) => {
        const db = firebase.database();   
        db.ref().child('tournaments/' + id + '/').remove();
        fetchTournament();
    }
    

    return(
        <tr>
            {user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' ? <td> <Button style={{width: '70px', marginTop: '5px', marginBottom: '5px'}} onClick={() => handleUpdate(id)}>{current ? 'FINISH' : 'START'}</Button></td> : <td> - </td>}
            <td>
                <span className='td-span-float-left'><Link to={`tournaments/${id}`} onClick={() => fetchRegisteredPlayers(id)}>{name}</Link></span>
            </td>
            <td>
                {date}
            </td>
            <td>
                {current.toString()}
            </td>
            
                {user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' ? 
                <td>
                    <Button className='button-delete' onClick={() => handleDelete(id)}>
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
    user: state.firebase.auth,
    pahtname: state.router.location.pahtname
})

const mapDispatchToProps = dispatch => ({
    fetchTournament: () => {
        dispatch(fetchTournaments())
    },
    fetchRegisteredPlayerss: id => {
        dispatch(fetchRegisteredPlayers(id))
    }
})

const withReduxTournament = reduxForm({
    form : 'checked-players'
})(Tournament)

export default connect(mapStateToProps, mapDispatchToProps )(withReduxTournament);