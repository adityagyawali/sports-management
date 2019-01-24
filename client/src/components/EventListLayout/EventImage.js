import React from "react";
import { Link } from "react-router-dom";
import { Container, Button} from 'semantic-ui-react';
import './EventImage.css';

import eventBasketball from '../../assets/basketball.jpg';
import eventFloorball from '../../assets/floorball.jpg';
import eventFootball from '../../assets/football.jpg';
import eventRun from '../../assets/run.jpg';
import eventSnowboard from '../../assets/snowboard.jpg';

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
        const imageList = [eventBasketball, eventFloorball, eventFootball, eventRun, eventSnowboard];
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