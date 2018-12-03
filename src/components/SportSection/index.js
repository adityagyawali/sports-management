import React from "react";
import "./index.css";
import { Container, Card, Image } from "semantic-ui-react";
import Football from "../../assets/football.jpg";
import Basketball from "../../assets/basketball.jpg";
import Icehockey from "../../assets/icehockey.jpg";


const Sport = () => (
	<Container className="cardSection">
		<Card className="card">
			<Image src={Basketball} />
			<Card.Content>
				<Card.Header>Basketball</Card.Header>
				<Card.Meta>
					<span className='date'>Joined in 2015</span>
				</Card.Meta>
				<Card.Description></Card.Description>
			</Card.Content>
		</Card>
		<Card className="card">
			<Image src={Football} />
			<Card.Content>
				<Card.Header>Football</Card.Header>
				<Card.Meta>
					<span className='date'>Joined in 2015</span>
				</Card.Meta>
				<Card.Description></Card.Description>
			</Card.Content>
		</Card>
		<Card className="card">
			<Image src={Icehockey} />
			<Card.Content>
				<Card.Header>Icehockey</Card.Header>
				<Card.Meta>
					<span className='date'>Joined in 2015</span>
				</Card.Meta>
				<Card.Description></Card.Description>
			</Card.Content>
		</Card>

		
	</Container>
);

export default Sport;
