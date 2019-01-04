import React from 'react';
import {Header, Image, } from 'semantic-ui-react';
import Mark from '../../assets/mark.png';

class JoinedPlayers extends React.Component{
    
    render(){
        const { userId, comment } = this.props.player;
        return (
            <Header as='h4' image className="joinedPlayerDetail">    
                <Image src={Mark} rounded size='small' />
                <Header.Content>
                    {userId}
                    <Header.Subheader>Comment: {comment}</Header.Subheader>
                </Header.Content>
            </Header>
        );
    }
}

export default JoinedPlayers;



/*
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