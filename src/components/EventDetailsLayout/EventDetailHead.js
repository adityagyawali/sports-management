import React from 'react';
import { Container, Image, Header, Button, Icon} from 'semantic-ui-react';

import "./EventDetailHead.css";
import Mark from '../../assets/mark.png';

class EventDetailHead extends React.Component{

    handleCategoryColor = (category) => {
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
        const { title, category, date, joinedPlayers, players, amPm, hour, minute, address, region, cost} = this.props.event;
        const sportCategoryColor = this.handleCategoryColor(category);

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
                        {amPm.toUpperCase()} {hour}:{minute}<br/>
                        {address}, {region}
                        </Header.Content>
                    </Header>

                    <h4><Button color="blue" className="sportCategoryBox">PLAYERS</Button> {joinedPlayers} / {players} <br /><br />
                        <Button color="blue" className="sportCategoryBox">COST</Button> <Icon name="euro sign"/> {cost} </h4>
                    <Header as='h4' image>
                        <Image src={Mark} rounded size='small' />
                        <Header.Content>
                        Mark (UserName)
                        <Header.Subheader>Organizer</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Container>
            </Container>
        );
    }
    
}

export default EventDetailHead;