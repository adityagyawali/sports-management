import React from "react";
import { Card, Container } from "semantic-ui-react";
import SportCard from "./sportCard";
import "./index.css";

//images
import Football from "../../assets/football.jpg";
import Basketball from "../../assets/basketball.jpg";
import Icehockey from "../../assets/icehockey.jpg";
import Golf from "../../assets/golf.jpg";
import Ski from "../../assets/ski.jpg";
import Cycle from "../../assets/cycle.jpg";
import Aerobics from "../../assets/aerobics.jpg";
import MotorCycle from "../../assets/motorCycle.jpg";
import VolleyBall from "../../assets/volleyBall.jpg";
import Tennis from "../../assets/tennis.jpg";
import UsFootball from "../../assets/usFootball.jpg";
import Badminton from "../../assets/badminton.jpg";

class Sport extends React.Component {
	getImageList = () => {
		const imageList = [
			Football,
			Basketball,
			Icehockey,
			Golf,
			Ski,
			Cycle,
			Aerobics,
			MotorCycle,
			VolleyBall,
			Tennis,
			UsFootball,
			Badminton
		];
		const CardImages = imageList.map((image, index) => {
			return <SportCard key={"sportCard_" + index} image={image} />;
		});

		return CardImages;
	};

	render() {
		const CardImages = this.getImageList();

		return (
			<Container>
				<Container className="sportCardTitle">
					EXPLORE THE SPORTS BY CATEGORIES
				</Container>
				<Container className="sportCardSection">
					<Card.Group itemsPerRow={4}>{CardImages}</Card.Group>
				</Container>
			</Container>
		);
	}
}

export default Sport;
