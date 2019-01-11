import React from 'react';
import { Container, Image, Header, Button, Icon} from 'semantic-ui-react';

import "./EventDetailHead.css";
import Mark from '../../assets/mark.png';
import eventBasketball from "../../assets/eventBasketball.jpg";
import eventFootball from "../../assets/eventFootball.jpg";
import eventFloorball from "../../assets/eventFloorball.jpg";
import eventBadminton from "../../assets/badminton.jpg";
import AEROBICS from "../../assets/aerobics.jpg";


class EventDetailHead extends React.Component{
    state = {
        eventPic: eventBasketball,
        categoryColor: "blue"
    }

    componentDidMount(){
        let {category} = this.props.event;
        let categoryColor;
        let eventPic;

        if(category === "BASKET BALL"){
            categoryColor = "orange";
            eventPic = eventBasketball
        }else if(category === "FOOT BALL"){
            categoryColor = "green";
            eventPic = eventFootball
        }else if(category === "BADMINTON"){
            categoryColor = "teal";
            eventPic = eventBadminton;
        }else if(category === "FLOOR BALL"){
            categoryColor = "blue";
            eventPic = eventFloorball
        }else {
            categoryColor = "red";
            eventPic = AEROBICS;
        }
        
        this.setState({
            eventPic: eventPic,
            categoryColor: categoryColor
        });
    
    }
    
    handleDateFormat = (date) => {
        const newDate = new Date(date).toDateString().split(" ");
        const day = newDate[0];
        newDate.shift();

        return newDate.join("/") + "   (" + day + ")"
    }

    render(){
        const { title, category, date, players, amPm, hour, address, region, cost} = this.props.event;
        let {minute} = this.props.event; 
        if (minute < 10) minute = "0" + minute;
        const dateFormat = this.handleDateFormat(date);
        const joinedPlayers = this.props.joinedPlayerNum
        
        return (
            <Container className="eventDetailHeadBox">
                <Container className="eventDetailHead detailHeadLeft" style={{backgroundImage: "url(" + this.state.eventPic + ")"}}>
                </Container>
                <Container className="eventDetailHead detailHeadRight">
                    
                    <h1>
                        <Button color={this.state.categoryColor} className="sportCategoryBox">{category}</Button><br/>{title}
                    </h1>

                    <Header as='h4' image>
                        <Icon name="calendar alternate outline"/>
                        <Header.Content>
                            {dateFormat}
                        </Header.Content> 
                        <br />
                        <Icon name="map marker alternate"/>
                        <Header.Content>
                            {amPm} {hour}:{minute}<br/>
                            {address}, {region}
                        </Header.Content>
                    </Header> 

                    <h4>
                        <Button color="blue" className="sportCategoryBox">PLAYERS</Button> {joinedPlayers} / {players} <br /><br />
                        <Button color="blue" className="sportCategoryBox">COST</Button> <Icon name="euro sign"/> {cost}
                    </h4>
                    
                    
                    
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