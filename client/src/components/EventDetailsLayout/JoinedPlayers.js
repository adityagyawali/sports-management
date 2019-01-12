import React from 'react';
import {Header, Image, Button, Form, Input} from 'semantic-ui-react';
import Mark from '../../assets/mark.png';
import "./JoinedPlayers.css"

class JoinedPlayers extends React.Component{
    
    state = {
        joinedPlayerId: this.props.player._id,
        eventId : this.props.player.eventId,
        userId: this.props.player.userId,
        comment: this.props.player.comment,
        isModifyMode: false,
    }

    handleModify = () => {
        console.log(this.props.player);
        this.setState({ isModifyMode: true})
    }

    handleSubmit = () => {
        console.log(this.state)
        this.setState({ isModifyMode: false})
        
        //여기서 데이타 베이스로 보내고, 다시 로드 하면 됨.....






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

export default JoinedPlayers;



/*
        let joinedPlayer;
        if (this.state.isModifyMode === true){
            joinedPlayer= (
                <Container>Strange</Container>
            )
        }else{
            joinedPlayer = (
                <Header as='h4' image className="joinedPlayerDetail">
                    <Image src={Mark} rounded size='small' />
                    <Header.Content>
                        {this.state.userId}
                        <Header.Subheader>
                            Message: {this.state.comment} <Button onClick={this.handleModify}className="messageModifyButton" size="small" color="red" >Modify</Button>
                        </Header.Subheader>
                    </Header.Content>
                </Header>
            )
        }

        return (
            {joinedPlayer}
        );








        <Header as='h4' image className="joinedPlayerDetail">    
            <Image src={Mark} rounded size='small' />
            <Header.Content>
                Mark (UserName)
                <Header.Subheader>Comment: </Header.Subheader>
            </Header.Content>
        </Header>

        <Header as='h4' image className="joinedPlayerDetail">     
            <Image src={Mark} rounded size='small' />
            <Header.Content>
                Mark (UserName)
                <Header.Subheader>Comment: Lets have fun !</Header.Subheader>
            </Header.Content>
        </Header>

        <Header as='h4' image className="joinedPlayerDetail"> 
            <Image src={Mark} rounded size='small' />
            <Header.Content>
                Mark
                <Header.Subheader>Comment: I will be little late but I am surely coming !</Header.Subheader>
            </Header.Content>
        </Header>

        */