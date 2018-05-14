import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import firebase from 'firebase';
import { fetchPlayer } from '../PlayersList/module/actions';
import Button from 'grommet/components/Button';
import { fetchTournaments } from '../TournamentsList/module/actions';
import { fetchRegisteredPlayers } from '../../containers/PlayersOnTournamentList/module/actions';
import Form from 'grommet/components/Form';
import DefaultValue from '../DefaultValue/DefaultValue';

class Player extends Component{

    state = {
        chosen: false,
        updating: false,
        Name: this.props.player.Name
    }

    handleUpdateCancel = () => {
        this.setState({
            updating: !this.state.updating
        })
    }

    handleUpdate = id => {
        console.log(this.state)
        this.setState({
            updating: !this.state.updating
        })

        const updatePlayer = ({}) => {

            const db = firebase.database();
            db.ref.child('players/' + this.props.id + '/').update({

            })
        }

        this.state.updating ? null : null;


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
                !this.state.updating ? <tr style={this.state.chosen ? {backGroundColor: 'green'} : null} className={!this.state.chosen ? 'all-seconds-players' : 'chosen-player'} >
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
                : 
                <tr>
                    <Form >
                        <table>
                            <tbody>
                            <tr><td><span className='td-span-float-left'>Name: </span></td><td><Field className='input-main' style={{width: '100%', padding: '0px', marginBottom: '0px'}}  name="Name" component='input' id="name" placeholder='Name:'/></td></tr>
                            <tr><td><span className='td-span-float-left'>Surname: </span></td><td><Field className='input-main' style={{width: '100%', padding: '0px', marginBottom: '0px'}} name="Surname" component="input" id="surname" placeholder='Surname:'/></td></tr>
                            <tr><td><span className='td-span-float-left'>Age: </span></td><td><Field className='input-main' style={{width: '100%', padding: '0px', marginBottom: '0px'}} name="Age" component="input" id="age" placeholder='Age:'/></td></tr>
                            <tr><td><span className='td-span-float-left'>Rating: </span></td><td><Field className='input-main' style={{width: '100%', padding: '0px', marginBottom: '0px'}} name="Rating" component="input" id="rating" placeholder='Rating:'/></td></tr>
                            <tr><td><Button  className='button-update' style={{marginTop: '0px', marginBottom: '0px', width: '70px'}} onClick={ () => this.handleUpdate(id)}>
                                        UPDATE
                                    </Button>
                                </td>
                                <td>
                                <Button  className='button-update' style={{marginTop: '0px', marginBottom: '0px', width:'70px'}} onClick={ () => this.handleUpdateCancel(id)}>
                                        CANCEL
                                    </Button>
                                </td>
                            </tr>
                            </tbody>
                    </table>
                    </Form>
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
    form : 'updating'
})(Player)

export default connect(mapStateToProps, mapDispatchToProps )(withReduxFormPlayer);