import React from 'react';
import {Table, Icon, Header, Button } from 'semantic-ui-react';
import './Event.css';


class Event extends React.Component {       

    handlePlayerIcons = (players, joinedPlayers) => {
        let playerIconsList = [];
        
        if (players === "Team"){
            playerIconsList.push(<Icon key={1} name="users" />);
            if(joinedPlayers === "Team"){
                playerIconsList.push(<Icon key={2} name="users" />);
            }else{
                playerIconsList.push(<Icon key={2} name="users" disabled />);
            }
        } else {
            for(let i=0; i<joinedPlayers; i++){
                playerIconsList.push(<Icon key={i} name="child" />);
            }
            for(let i=0; i<(players - joinedPlayers);i++){
                playerIconsList.push(<Icon key={i+joinedPlayers} name="child" disabled />);
            }
        }
        return playerIconsList;
    }

    handleCaegoryColor = (category) => {
        let categoryColor;
        if(category === "BASKET BALL"){
            categoryColor = "orange";
        }else if(category === "FOOT BALL"){
            categoryColor = "green";
        }else if(category === "BADMINTON"){
            categoryColor = "teal";
        }else if(category === "FLOOR BALL"){
            categoryColor = "blue";
        }else {
            categoryColor = "red";
        }
        return categoryColor;
    }



    render(){ 
        const {_id, title, category, date, players, joinedPlayers, amPm, hour, minute, address, region, cost} = this.props.event;
        const time = amPm + " " + hour + " : " + minute; 
        const playerIconsList = this.handlePlayerIcons(players, joinedPlayers);
        const sportCategoryColor = this.handleCaegoryColor(category);

        
        return (
        <Table.Row>
            <Table.Cell className="eventTablefixedTitleWidth" >
                <Header>
                    <Header.Content>
                        <a href={'/eventDetails/' + _id}>{title}</a>
                        <Header.Subheader><Button color={sportCategoryColor} className="sportCategoryBox"><small>{category}</small></Button></Header.Subheader>
                    </Header.Content>
                </Header>
            </Table.Cell>
            <Table.Cell>{date}</Table.Cell>
            <Table.Cell>
                {playerIconsList} <br/>
                {joinedPlayers} / {players}
            </Table.Cell>
            <Table.Cell>{time}</Table.Cell>
            <Table.Cell>{address}, <br/> {region}</Table.Cell>
            <Table.Cell>{cost}</Table.Cell>
        </Table.Row>
        );
    }
}


export default Event;