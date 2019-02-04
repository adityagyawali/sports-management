import React from 'react';
import {Container, Icon, Header, Button, Confirm} from 'semantic-ui-react';

import './EventDetailBody.css';
import JoinedPlayers from './JoinedPlayers';

class EventDetailBody extends React.Component {
    //for confirm modal
    state = { 
        open : false
    }
    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    
    handleModifyEvent = ()=> {
        this.props.onModifyEvent();
    }
    handleDeleteEvent = () => {
        this.close()
        this.props.onDeleteEvent();
    }

    handleModifyMessage = (item) => {
        this.props.onModifyMessage(item)
    }
    handleDeleteMessage = (id) => {
        this.props.onDeleteMessage(id)
    }

    render(){
        const joinedPlayers = this.props.joinedPlayerList;
        let joinedPlayerList;
        if (joinedPlayers.length < 1){
            joinedPlayerList = <h3>Be the first challenger !</h3>
        }else{
            joinedPlayerList = joinedPlayers.map( (player, index) => {
                return <JoinedPlayers key={"player_"+ index} player={player} 
                    loggedUserId={this.props.userId}
                    loggedUserName={this.props.userName} 
                    modifyMessage={this.handleModifyMessage}
                    deleteMessage={this.handleDeleteMessage}/>
            });
        }  

        const { description, mobile, email } = this.props.event;
        const userId = this.props.event.userId;

        return (
    
            <Container className="detailBox">
                
                <Container className="detailInfoBox">
                    <Container className="detailInfo detailInfoLeft">
                        ABOUT
                    </Container>
                    <Container className="detailInfo detailInfoRight">
                        {description}
                    </Container>
                </Container>

                <Container className="detailInfoBox">
                    <Container className="detailInfo detailInfoLeft">
                        CONTACT
                    </Container>
                    <Container className="detailInfo detailInfoRight contactInfo">
                        
                        <Header as='h4' image className="contactDetail">    
                            <Icon name="at" /> 
                            <Header.Content>
                                {email}
                                <Header.Subheader>Email </Header.Subheader>
                            </Header.Content>
                        </Header>    

                        <Header as='h4' image className="contactDetail">    
                            <Icon name="mobile" /> 
                            <Header.Content>
                                +358 {mobile}
                                <Header.Subheader>Mobile </Header.Subheader>
                            </Header.Content>
                        </Header>                        
                    </Container>
                </Container>
            
                <Container className="detailInfoBox">
                    <Container className="detailInfo detailInfoLeft">
                        JOINED PLAYERS
                    </Container>
                    <Container className="detailInfo detailInfoRight joinedPlayerInfo">
                        {joinedPlayerList}
                    </Container>
                </Container>
                
                { (userId === this.props.userId || this.props.userName === "adminMaster") ?
                    (<Container className="modifiyButtonBox">
                        <Button color="red" size="big" onClick={this.handleModifyEvent}><Icon name="cog"/>Modify</Button>
                        <Button color="facebook" size="big" onClick={this.open}><Icon name="delete"/>Delete</Button>
                        
                        <Confirm style={{height: "auto"}} 
                            open={this.state.open} 
                            size="small"
                            content= {<div className="content">Are you sure <span style={{color: "red", fontWeight:"bold"}}>Delete the Event ?</span></div>}
                            onCancel={this.close} 
                            onConfirm={this.handleDeleteEvent}/>
                        
                    </Container>) : ""
                }
            </Container>
        );
    }
}

export default EventDetailBody;