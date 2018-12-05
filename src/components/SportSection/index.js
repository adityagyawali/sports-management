import React from "react";
import { Card } from "semantic-ui-react";
import Football from "../../assets/football.jpg";
import basketball from "../../assets/basketball.jpg";
import icehockey from "../../assets/icehockey.jpg";
import golf from "../../assets/golf.jpg";

import ski from "../../assets/ski.jpg";
import cycle from "../../assets/cycle.jpg";
import aerobics from "../../assets/aerobics.jpg";
import usfootball from "../../assets/usfootball.jpg";
import ball from "../../assets/ball.jpg";
import tennis from "../../assets/tennis.jpg";
import usfoo from "../../assets/usfoo.jpg";
import badminton from "../../assets/badminton.jpg";





import "./index.css";

const Sport = () => (
	<div className="sports">
		
  <Card.Group itemsPerRow={4}>
    <Card color='red'  image={golf} />
    <Card color='orange' image={basketball} />
    <Card color='yellow' image={Football} />
    <Card color='olive' image={icehockey} />
    <Card color='green' image={ski} />
    <Card color='teal' image={cycle} />
    <Card color='blue' image={aerobics} />
    <Card color='violet' image={usfootball} />
    <Card color='purple' image={ball} />
    <Card color='pink' image={tennis} />
    <Card color='brown' image={usfoo} />
    <Card color='grey' image={badminton} />
  </Card.Group>

	</div>
	

);

export default Sport;
