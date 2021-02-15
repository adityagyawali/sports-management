import React from 'react';
import {Container, Icon, Header, Button} from 'semantic-ui-react';

import './EventDetailBody.css';
import JoinedPlayers from './JoinedPlayers';


class EventDetailBody extends React.Component {
    
    onClickModify = ()=> {
        this.props.onModify();
    }

    render(){
        const joinedPlayers = this.props.joinedPlayerList;
        let joinedPlayerList;
        if (joinedPlayers.length < 1){
            joinedPlayerList = <h3>Be the first challenger !</h3>
        }else{
            joinedPlayerList = joinedPlayers.map( (player, index) => {
                return <JoinedPlayers key={"player_"+ index} player={player} />
            });
        }


        const { description, mobile, email } = this.props.event;
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
                
                <Container className="modifiyButtonBox">
                    <Button color="red" size="big" onClick={this.onClickModify}><Icon name="cog"/>Modify</Button>
                </Container>
            </Container>
        );
    }
}

export default EventDetailBody;