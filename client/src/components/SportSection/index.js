import React from "react";
import {Card, Container} from 'semantic-ui-react';
import SportCard from './sportCard';
import "./index.css";

//images 
import Football from "../../assets/football.jpg";
import Basketball from "../../assets/basketball.jpg";
import Icehockey from "../../assets/icehockey.jpg";
import Golf from "../../assets/golf.jpg";
import Ski from "../../assets/ski.jpg";
import Cycle from "../../assets/cycle.jpg";
import Aerobics from "../../assets/aerobic.jpg";
import Tennis from "../../assets/tennis.jpg";
import Badminton from "../../assets/badminton.jpg";
import Motorcycle from '../../assets/motorcycle.jpg';
import Volleyball from '../../assets/volleyball.jpg';
import Usfootball from '../../assets/usfootball.jpg';
 
class Sport extends React.Component {
  
  getImageList = () => {
    const imageList = [Football, Basketball, Icehockey, Golf, Ski, Cycle, Aerobics, Motorcycle, Volleyball, Tennis, Usfootball, Badminton];
    const CardImages = imageList.map ( (image, index) => {
      return (<SportCard key={"sportCard_"+index} image = {image} />); 
    });

    return CardImages;
  }

  render(){
    const CardImages = this.getImageList();
  
    return (
      <Container>
        <Container className="sportCardTitle">
          EXPLORE THE SPORTS BY CATEGORIES
        </Container>
        <Container className="sportCardSection">
          <Card.Group itemsPerRow={4}>
            {CardImages}
          </Card.Group>
        </Container>
      </Container>
    );
  }
}


export default Sport;
