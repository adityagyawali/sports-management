import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "semantic-ui-react";
import "./MainImageRolling.css";

//image
import mainFootball from "../../assets/mainFootball.jpg";
import mainBasketball from "../../assets/mainBasketball.jpg";
import mainIceHockey from "../../assets/mainIceHockey.jpg";

class ImageRolling extends Component {
	state = {
		src: mainBasketball,
		imageList: [mainFootball, mainBasketball, mainIceHockey],
		num: 0
	};

	componentWillUnmount() {
		clearInterval(this.image);
	}
	
	componentDidMount() {
		this.image = setInterval(() => this.changeImage(), 3000);
	}

	changeImage = () => {
		let num = this.state.num;
		const imageListLength = this.state.imageList.length - 1;
		if (num === imageListLength) num = 0;
		else num++;

		this.setState({
			src: this.state.imageList[num],
			num: num
		});
	};

	render() {
		return (
			<Container fluid
				className="mainImageBox" 
				style={{ backgroundImage: "url(" + this.state.src + ")" }}
			>
				<Container className="mainInfoBox" fluid>
					<h1 className="mainTitle"> WHAT IS YOUR SPORTS ? </h1>
					<p className="mainDescription">Join the sports you like now !</p>
					<br />
					<Link to="/needPlayers">
						<Button color="red">Need Players</Button>
					</Link>
					<Link to="/eventList">
						<Button color="blue">Find Events</Button>
					</Link>
				</Container>
			</Container>
		);
	}
}

export default ImageRolling;
