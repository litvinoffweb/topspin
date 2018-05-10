import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import firebase from 'firebase';
import { fetchPlayer } from '../PlayersList/module/actions';
import Button from 'grommet/components/Button';
import { fetchTournaments } from '../TournamentsList/module/actions';
import { fetchRegisteredPlayers } from '../../containers/PlayersOnTournamentList/module/actions';

const PlayerRegistered = props => {

    const { player: {Name, Surname, Rating, Age, Style, id, facebookID}, user, fetchPlayers, match, location, fetchTournaments, fetchRegisteredPlayerss } = props;
    const tourID = user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' ? match.params.id : '';

    const handleDelete = (id, tourID) => {

        const db = firebase.database();   

        db.ref().child('tournaments/' + tourID + '/players/' + id).remove();
        console.log('tournaments/' + tourID + '/players/' + id);
        fetchPlayers();
        fetchTournaments();
        fetchRegisteredPlayerss(tourID);
    }
    

    return(
        <tr>
            <td> <img src={`https://graph.facebook.com/${facebookID}/picture?type=small`} className='avatar-facebook' alt='\' /> </td>
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
            

                {user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' ? 
                <td>
                    <Button className='button-delete' onClick={() => handleDelete(id, match.params.id)}>
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
    fetchPlayers: () => {
        dispatch(fetchPlayer())
    },
    fetchTournaments: () => {
        dispatch(fetchTournaments())
    },
    fetchRegisteredPlayerss: id => {
        dispatch(fetchRegisteredPlayers(id))
    }
})

const withReduxFormPlayerRegistered = reduxForm({
    form : 'checked-players'
})(PlayerRegistered)

export default connect(mapStateToProps, mapDispatchToProps )(withReduxFormPlayerRegistered);