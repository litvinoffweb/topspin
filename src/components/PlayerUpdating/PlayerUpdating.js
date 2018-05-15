import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import firebase from 'firebase';
import { fetchPlayer } from '../PlayersList/module/actions';



class PlayerUpdating  extends Component {

   state = {
       Age: this.props.player.Age,
       Name: this.props.player.Name,
       Surname: this.props.player.Surname,
       id: this.props.player.id,
       facebookID: this.props.player.facebookID,
       Style: this.props.player.Style,
       Rating: this.props.player.Rating
   }

   handleChange = e => {
       console.log(e.target.name, '= ', e.target.value)
       this.setState({
           [e.target.name]: e.target.value
       })

   }

   handleUpdate = id => {

        const updatePlayer = data => {

            const db = firebase.database();
            db.ref().child('players/' + this.props.player.id + '/').update(data)
        }

        updatePlayer({
            Age: this.state.Age,
            Name: this.state.Name,
            Surname: this.state.Surname,
            id: this.state.id,
            facebookID: this.state.facebookID,
            Style: this.state.Style,
            Rating: this.state.Rating
        })
        this.props.fetchPlayers();
        this.props.handleUpdateCancel();
   }
    render(){

        
        const { player: { Age, Name, Surname, id, facebookID, Rating},userID, handleUpdateCancel, location} = this.props;
        return(
             <tr>
                 
                <td colspan='2'>
                    
                                    <Form >
                                     <table>
                                            <tbody>
                                            <tr><td><span className='td-span-float-left'>Name: </span></td>
                                                <td><input className='input-main' onChange={(e) => this.handleChange(e)} style={{width: '100%', padding: '0px', marginBottom: '0px'}}  name="Name" type='text' id="name" placeholder='Name:' defaultValue={Name}/></td>
                                                
                                            </tr>
                                            <tr><td><span className='td-span-float-left'>Surname: </span></td>
                                                <td><input className='input-main' onChange={(e) => this.handleChange(e)} style={{width: '100%', padding: '0px', marginBottom: '0px'}} name="Surname" type='text' id="surname" placeholder='Surname:' defaultValue={Surname}/></td></tr>
                                            <tr><td><span className='td-span-float-left'>Age: </span></td>
                                                <td><input className='input-main' onChange={(e) => this.handleChange(e)} style={{width: '100%', padding: '0px', marginBottom: '0px'}} name="Age" type='text' id="age" placeholder='Age:'  defaultValue={Age}/></td></tr>
                                            <tr><td><span className='td-span-float-left'>Rating: </span></td>
                                                <td><input className='input-main' onChange={(e) => this.handleChange(e)} style={{width: '100%', padding: '0px', marginBottom: '0px'}} name="Rating" type='text' id="rating" placeholder='Rating:'  defaultValue={Rating}/></td></tr>
                                            <tr><td/><td><Button label='UPDATE' className='button-update' style={{marginTop: '0px', marginBottom: '0px', width: '100%'}} onClick={ () => this.handleUpdate(id)}>
                                                      
                                                    </Button>
                                                </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Form>
                   </td>
                   <td colSpan='3'>
                        <table>
                            <tbody>
                                <tr><td colSpan='2'><img src={`https://graph.facebook.com/${facebookID}/picture?type=small`} className='avatar-facebook' alt='\' /></td></tr>
                                <tr><td ><span className='td-span-float-left'>Name:</span></td><td>{this.state.Name}</td></tr>
                                <tr><td ><span className='td-span-float-left'>Surname:</span></td><td>{this.state.Surname}</td></tr>
                                <tr><td ><span className='td-span-float-left'>Age:</span></td><td>{this.state.Age}</td></tr>
                                <tr><td ><span className='td-span-float-left'>Rating:</span></td><td>{this.state.Rating}</td></tr>
                                
                            </tbody>
                        </table>
                    </td>
                    <td colSpan={(userID === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' && location.pathname === `/admin/create_player`) ? '2' : '3'} style={{position: 'relative'}}>
                        <Button  className='button-cancel' label='CANCEL' style={{marginTop: '0px', marginBottom: '0px', position: 'absolute', width: '50%', top:'10px', right: '10px'}} onClick={ () => handleUpdateCancel(id)}>
                            
                         </Button>                   
                    </td>
                   
                </tr>
        )
    }
    
}

const mapStateToProps = state => ({
    userID: firebase.auth.uid
})

const mapDispatchToProps = dispatch => ({
    fetchPlayers: () => {
        dispatch(fetchPlayer())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerUpdating);