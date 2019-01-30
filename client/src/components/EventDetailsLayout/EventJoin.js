import React from 'react';
import {Container, Button, Input, Form} from 'semantic-ui-react';
import './EventJoin.css';

import {connect} from "react-redux";
import {addPlayersToEvent} from '../../actions/joinEventActions';

class EventJoin extends React.Component {
    
    state = {
        comment:"",
        userId: this.props.userId,
        userName: this.props.userName,
        eventId: this.props.eventId
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(addPlayersToEvent(this.state))
        this.props.onSubmit();
    }

    isAlreadyJoined = () => {
        const joinedList = this.props.joinedPlayerList;
        for(let i=0; i<joinedList.length;i++){
            if(this.props.userId === joinedList[i].userId){
                return true
            }
        }
        return false
    }

    render(){
        const joinedPlayers = this.props.joinedPlayerList.length;
        const players = this.props.players;
        let joinButtonToggle;

        if(this.isAlreadyJoined()){
            joinButtonToggle =             
            <Container>
                <h1 className="eventJoinBox">You are successfully joined! <br/> Enjoy {this.props.category}!</h1>
            </Container>
        }else if (players > joinedPlayers){
            joinButtonToggle = 
                <Container>
                    <h1 className="eventJoinBox">Join the Event ?</h1>
                    <Form className="eventJoinForm" onSubmit={this.onSubmit}>
                        <Form.Field className="eventJoinFormInputField">
                            <Input name="comment" onChange={this.onChange}  value={this.state.comment} label='Message' placeholder='Short comment or notice' />
                        </Form.Field>
                        <Form.Field>
                            <Button type="submit" color="blue">JOIN</Button>
                        </Form.Field>
                    </Form>
                </Container>
            
        }else{
            joinButtonToggle = 
            <Container>
                <h1 className="eventJoinBox">You are late this time ! <br/>Try other events ! </h1>
            </Container>
        }

        return (
            <Container>
                {joinButtonToggle}
            </Container>
        );
    }
}



export default  connect()(EventJoin);