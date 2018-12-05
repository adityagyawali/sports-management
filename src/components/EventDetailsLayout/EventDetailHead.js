import React from 'react';
import { Container, Image, Header, Button, Icon} from 'semantic-ui-react';

import "./EventDetailHead.css";


class EventDetailHead extends React.Component{
    static defaultProps = {
        id:8,  
        title:"Just for fun, come and play", 
        category: "BASKET BALL",
        date: 'Tue, 04 Dec', 
        players: 10, 
        joinedPlayers: 3, 
        time: '19:00', 
        address: "Kaj Franckin katu 4", 
        region: "Helsinki",  
        cost: 10 
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
        return categoryColor; ////
    }

    render(){
        const {title, category, date, players, joinedPlayers, time, address, region, cost} = this.props;
        const sportCategoryColor = this.handleCaegoryColor(category);
       

        return (
            <Container className="eventDetailHeadBox">
                <Container className="eventDetailHead detailHeadLeft">
                </Container>
                <Container className="eventDetailHead detailHeadRight">
                    <h3><Icon name="calendar alternate outline"/> {date} </h3>
                    <h1><Button color={sportCategoryColor} className="sportCategoryBox">{category}</Button><br/>{title}</h1>
                    <Header as='h4' image>
                        <Icon name="map marker alternate"/>
                        <Header.Content>
                        {time}<br/>
                        {address}, {region}
                        </Header.Content>
                    </Header>

                    <h4><Button color="blue" className="sportCategoryBox">PLAYERS</Button> {joinedPlayers} / {players} <br /><br />
                        <Button color="blue" className="sportCategoryBox">COST</Button> <Icon name="euro sign"/> {cost} </h4>
                    <Header as='h4' image>
                        <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='small' />
                        <Header.Content>
                        Mark
                        <Header.Subheader>Organizer</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Container>
            </Container>
        );
    }
}

export default EventDetailHead;