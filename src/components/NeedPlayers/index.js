import React, { Component, Fragment } from "react";
import { Button, Form } from "semantic-ui-react";
import { playersInfo } from "./players";

class NeedPlayers extends Component {
	state = {
		location: "",
		games: ""
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log("this.state.location", this.state.location);
		console.log("this.state.games", this.state.games);
	};
	render() {
		// console.log("playerinfo", playersInfo);
		let filteredPlayer = playersInfo
			.filter(person => {
				return (
					person.Location.toLowerCase().indexOf(
						this.state.location.toLowerCase()
					) >= 0
				);
			})
			.map(player => player.FullName);

		return (
			<Fragment>
				<h1>Find the players based on location or games</h1>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<label>Location</label>
						<input
							placeholder="Find players from  Helsinki, Espoo...."
							onChange={this.handleChange}
							value={this.state.location}
							name="location"
						/>
					</Form.Field>
					<Form.Field>
						<label>Games</label>
						<input
							placeholder="Find players who play Football, Cricket..."
							onChange={this.handleChange}
							value={this.state.games}
							name="games"
						/>
					</Form.Field>

					{/* <Button type="submit">Submit</Button> */}
				</Form>
				<h1>{filteredPlayer}</h1>
			</Fragment>
		);
	}
}

export default NeedPlayers;
