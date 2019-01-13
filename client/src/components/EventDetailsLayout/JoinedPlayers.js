import React from 'react';
import {Header, Image, Button, Form, Input} from 'semantic-ui-react';
import Mark from '../../assets/mark.png';
import "./JoinedPlayers.css"

import {modifyMessageOfJoinedPlayer} from '../../actions/joinEventActions';

import {connect} from 'react-redux';

class JoinedPlayers extends React.Component{
    
    state = {
        joinedPlayerId: this.props.player._id,
        comment: this.props.player.comment,
        userId: this.props.player.userId,
        isModifyMode: false,
    }

    handleModify = () => {
        this.setState({ isModifyMode: true})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const item = {
            id: this.state.joinedPlayerId,
            comment: this.state.comment, 
        }

        this.props.dispatch(modifyMessageOfJoinedPlayer( item, 
            () => this.setState({ isModifyMode: false}) 
        )) // when database response 200
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const {isModifyMode} = this.state;
        let joinedPlayerForm ="";
        if ( !isModifyMode){
            joinedPlayerForm =
                <Header.Subheader>
                    Message: {this.state.comment} <Button onClick={this.handleModify}className="messageModifyButton" size="small" color="red" >Modify</Button>
                </Header.Subheader>
        }else{
            joinedPlayerForm =
                <Header.Subheader>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <Input name="comment" onChange={this.onChange}  value={this.state.comment} label='Message' placeholder='Short comment or notice' />
                            <Button type="submit" className="messageModifyButton" size="small" color="blue" >Submit</Button>
                        </Form.Field>
                    </Form>
                </Header.Subheader>
        }
        
        return (
            <Header as='h4' image className="joinedPlayerDetail">
                <Image src={Mark} rounded size='small' />
                <Header.Content>
                    {this.state.userId}
                    {joinedPlayerForm}
                </Header.Content>
            </Header> 
        )    
    }
}

export default connect()(JoinedPlayers);