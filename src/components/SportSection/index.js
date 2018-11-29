import React from "react";
import { Container, Card, Image } from "semantic-ui-react";
import Football from "../../assets/football.jpg";
import basketball from "../../assets/basketball.jpg";
import icehockey from "../../assets/icehockey.jpg";
import tennis from "../../assets/tennis.jpg";

import "./index.css";

const Sport = () => (
	<div className="sports">
	
	<Card>
			<Container>
				<Image className="tennis" src={tennis} />
			</Container>
			<Card.Content>
				<Card.Header />
				<Card.Meta>
					<span className="tennis" />
				</Card.Meta>
				<Card.Description>TENNIS</Card.Description>
			</Card.Content>
			<Card.Content extra />
		</Card>  
		<Card>
			<Container>
				<Image className="basketball" src={basketball} />
			</Container>
			<Card.Content>
				<Card.Header />
				<Card.Meta>
					<span className="basketball" />
				</Card.Meta>
				<Card.Description>BASKETBALL</Card.Description>
			</Card.Content>
			<Card.Content extra />
		</Card>  
		<Card>
			<Container>
				<Image src={icehockey} />
			</Container>
			<Card.Content>
				<Card.Header />
				<Card.Meta>
					<span className="icehockey" />
				</Card.Meta>
				<Card.Description>ICEHOCKEY</Card.Description>
			</Card.Content>
			<Card.Content extra />
		</Card>

		<Card>
			<Container>
				<Image src={Football} />
			</Container>
			<Card.Content>
				<Card.Header />
				<Card.Meta>
					<span className="football" />
				</Card.Meta>
				<Card.Description>FOOTBALL</Card.Description>
			</Card.Content>
			<Card.Content extra />
		</Card>

		
	</div>
);

export default Sport;
