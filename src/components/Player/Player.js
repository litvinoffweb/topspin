import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import firebase from 'firebase';
import { fetchPlayer } from '../PlayersList/module/actions';
import Button from 'grommet/components/Button';
import { fetchTournaments } from '../TournamentsList/module/actions';
import { fetchRegisteredPlayers } from '../../containers/PlayersOnTournamentList/module/actions';

class Player extends Component{

    state = {
        chosen: false
    }

    handleUpdate = id => {
        console.log(id)
    }
    handleDelete = (id) => {

        const db = firebase.database();   

        db.ref().child('players/' + this.props.id + '/').remove();

        this.props.fetchPlayers();
        this.props.fetchTournaments();
    }
    
    handleAdd = (id) => {
        const tourID = this.props.user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' ? this.props.match.params.id : '';
        const db = firebase.database();
        db.ref().child('tournaments/' + this.props.match.params.id + '/players/' + this.props.player.id).update({
            Name: this.props.player.Name,
            Surname: this.props.player.Surname,
            Rating: this.props.player.Rating,
            Age: this.props.player.Age,
            Style: this.props.player.Style,
            id: this.props.player.id,
            facebookID: this.props.player.facebookID,
            chosen: true
        })
        this.setState({
            chosen: true
        })
        this.props.fetchRegisteredPlayerss(tourID);
        
    }
        render() {
            const { player: { Age, Name, Surname, id, facebookID, Rating, Style, chosen}, match, user, fetchPlayers, fetchTournaments, fetchRegisteredPlayerss, location} = this.props;
            return(
                <tr style={this.state.chosen ? {backGroundColor: 'green'} : null} className={!this.state.chosen ? 'all-seconds-players' : 'chosen-player'} >
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
                            <Button className='button-delete' onClick={() => this.handleDelete(id)}>
                                -
                            </Button>
                        </td> :
                        <td>
                            :P
                        </td> 
                    }
                    {user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' && location.pathname === `/admin/tournaments/${match.params.id}` 
                        ? <td> 
                            <Button  className='button-add' style={{marginTop: '0px', marginBottom: '0px'}} onClick={ () => this.handleAdd(id)}>
                                +
                            </Button>
                         </td> 
                        : null}
                        {user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' 
                        ? <td> 
                            <Button  className='button-update' style={{marginTop: '0px', marginBottom: '0px'}} onClick={ () => this.handleUpdate(id)}>
                                +-
                            </Button>
                         </td> 
                        : null}
                    
                </tr>
            )
        }
    
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

const withReduxFormPlayer = reduxForm({
    form : 'checked-players'
})(Player)

export default connect(mapStateToProps, mapDispatchToProps )(withReduxFormPlayer);