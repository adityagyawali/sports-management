import React from "react";
import { Link } from "react-router-dom";
import { Container, Button} from 'semantic-ui-react';
import './EventImage.css';

import Basketball from '../../assets/basketball.jpg';
import Floorball from '../../assets/floorball.jpg';
import Football from '../../assets/football.jpg';
import Run from '../../assets/run.jpg';
import Snowboard from '../../assets/snowboard.jpg';
import Cycle from "../../assets/cycle.jpg";
import UsFootball from "../../assets/usfootball.jpg";

/*
Photo by Tim Mossholder from Pexels ( basektball )
Photo by Lukas from Pexels ( football kids)
Photo by RUN 4 FFWPU from Pexels ( Run )
*/

class EventImage extends React.Component {
    state = {
        title: "Find your sport",
        description: "Find out what's happening in the your sport groups around the world and start meeting up with the ones near you.",
        image: ""
    }

    componentWillMount() {
        const imageList = [Basketball, Floorball, Football, Run, Snowboard, Cycle, UsFootball];
        let temp = Math.floor(Math.random() * imageList.length);
        this.setState({
            image: imageList[temp]
        });
    }


    render(){
        const {title, description} = this.state;
        return (
            <Container className="eventImageBox" fluid style={{backgroundImage: "url("+this.state.image+")"}}>
                <Container className="eventInfoBox">
                    <h1 className="eventTitle"> {title} </h1>
                    <p className="eventDescription">{description}</p>
                    <Link to="/login"><Button color='blue'>Sign me up!</Button></Link>
                </Container>
            </Container>
        );
    }

}

export default EventImage;