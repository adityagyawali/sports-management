import React from 'react';
import {Header, Image, Button, Form, Input, Confirm, Icon} from 'semantic-ui-react';
import Mark from '../../assets/mark.png';
import "./JoinedPlayers.css"

class JoinedPlayers extends React.Component{

    state = {
        joinedId: this.props.player._id,
        comment: this.props.player.comment,
        userId: this.props.player.userId,
        userName: this.props.player.userName,
        isModifyMode: false,
        open : false
    }

    //for confirm modal
    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    handleModify = () => {
        this.setState({ isModifyMode: true})
    }

    handleSubmit = (e) => {//submit message
        e.preventDefault()
        const item = {
            id: this.state.joinedId,
            comment: this.state.comment, 
        }
        this.props.modifyMessage(item)
        this.setState({ isModifyMode: false})
    }

    handleDelete = () => { //delete Message

        this.props.deleteMessage( this.state.joinedId )
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
                    <Icon name="comment outline" />{this.state.comment} 
                    { (this.state.userId === this.props.loggedUserId || this.props.loggedUserName === "adminMaster")?
                        ( <span>
                        <Button onClick={this.handleModify} className="messageModifyButton" size="small" color="red" >Modify</Button>
                        <Button onClick={this.open} className="messageModifyButton" size="small" color="facebook" >Delete</Button>
                        <Confirm style={{height: "auto"}} 
                                open={this.state.open} 
                                size="small"
                                content={"Are you sure that You don't want to join the event?"}
                                onCancel={this.close} 
                                onConfirm={this.handleDelete} />
                        
                        </span>)
                        : ""
                    }
                </Header.Subheader>
        }else{
            joinedPlayerForm =
                <Header.Subheader>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <Input name="comment" onChange={this.onChange}  value={this.state.comment} label='Message' placeholder='Short comment or notice' />
                            <Button type="submit" className="messageModifyButton" size="small" color="blue">Submit</Button>
                        </Form.Field>
                    </Form>
                </Header.Subheader>
        }
        
        return (
            <Header as='h4' image className="joinedPlayerDetail">
                <Image src={Mark} rounded size='small' />
                <Header.Content>
                    {this.state.userName}
                    {joinedPlayerForm}
                </Header.Content>
            </Header> 
        )    
    }
}

export default JoinedPlayers;