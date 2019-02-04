import React from 'react';
import { Container, Image, Header, Button, Icon} from 'semantic-ui-react';

import "./EventDetailHead.css";
import Mark from '../../assets/mark.png';

class EventDetailHead extends React.Component{
    state = {
        eventPic: "",
        categoryColor: ""
    }

    componentWillMount(){

        const sportCategoryList = this.props.sportCategoryList;
        const {category} = this.props.event;

        let categoryColor = "black"
        let eventPic = require("../../assets/aerobic.jpg")

        for(let i=0; i<sportCategoryList.length;i++){   
            if(sportCategoryList[i].category === category){
                categoryColor = sportCategoryList[i].categoryColor
                eventPic = require("../../assets/"+ category.toLowerCase()+".jpg")   
            }
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

        return newDate.join("/") + " (" + day + ")"
    }

    render(){
        const { title, category, date, players, amPm, hour, address, region, cost, duration, userName} = this.props.event;
        let {minute} = this.props.event; 
        if (minute < 10) minute = "0" + minute;
        const dateFormat = this.handleDateFormat(date);
        const joinedPlayers = this.props.joinedPlayerNum
        
        return (
            <Container className="eventDetailHeadBox">
                <Container className="eventDetailHead detailHeadLeft" style={{ backgroundImage: "url(" + this.state.eventPic + ")"}}>
                </Container>
                <Container className="eventDetailHead detailHeadRight">
                    
                    <Button color={this.state.categoryColor} className="sportCategoryBox">{category}</Button>
                    <h1>{title}</h1>

                    <Header as='h4' image>
                        <Icon name="calendar alternate outline"/>
                        <Header.Content>
                            {dateFormat}
                        </Header.Content> 
                        <br />
                        <Icon name="map marker alternate"/>
                        <Header.Content>
                            {amPm} {hour}:{minute} / ({duration} hour)<br/>
                            {address}, {region}
                        </Header.Content>
                    </Header> 
                    
                    <h4>
                        <Button color="blue" className="sportCategoryBox">PLAYERS</Button> {joinedPlayers} / {players} <br /><br />
                        <Button color="blue" className="sportCategoryBox">COST</Button> <Icon name="euro sign"/> {cost}
                    </h4>
                    
                    <Header as='h4' image className="marginBottomZero">
                        <Image src={Mark} rounded size='small' />
                        <Header.Content>
                            {userName.split("@")[0]}
                        <Header.Subheader>Organizer</Header.Subheader>
                        </Header.Content>    
                    </Header>


                </Container>
            </Container>
        );
    }
    
}

export default EventDetailHead;