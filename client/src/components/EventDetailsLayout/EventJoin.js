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
        console.log(this.state)
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(addPlayersToEvent(this.state))
        this.props.onSubmit();
    }

    render(){
        const joinedPlayers = this.props.joinedPlayerNum;
        const players = this.props.players;
        let joinButtonToggle;

        if (players > joinedPlayers){
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
                <h1 className="eventJoinBox">You are late this time ! Try other events ! </h1>
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