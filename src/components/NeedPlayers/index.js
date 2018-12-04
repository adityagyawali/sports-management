import React, { Component, Fragment } from "react";
import { Form, Table, Header } from "semantic-ui-react";

class NeedPlayers extends Component {
	state = {
		date: "",
		address: "",
		games: "",
		time: "",
		players: "",
		information: []
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
		const { date, address, games, time, players } = this.state;
		const eventInfo = {
			date,
			address,
			games,
			time,
			players
		};
		this.setState(state => ({
			information: state.information.concat(eventInfo),
			date: "",
			address: "",
			games: "",
			time: "",
			players: ""
		}));
	};
	render() {
		const { information } = this.state;
		return (
			<Fragment>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group widths="equal">
						<Form.Input
							fluid
							label="Date"
							onChange={this.handleChange}
							value={this.state.date}
							placeholder="Date"
							name="date"
						/>
						<Form.Input
							fluid
							label="Address"
							onChange={this.handleChange}
							value={this.state.address}
							placeholder="Address"
							name="address"
						/>
						<Form.Input
							fluid
							label="Games"
							onChange={this.handleChange}
							value={this.state.games}
							placeholder="Games"
							name="games"
						/>
						<Form.Input
							fluid
							label="Players"
							onChange={this.handleChange}
							value={this.state.players}
							placeholder="Players"
							name="players"
						/>
						<Form.Input
							fluid
							label="Time"
							onChange={this.handleChange}
							value={this.state.time}
							placeholder="Time"
							name="time"
						/>
						<Form.Button>Submit</Form.Button>
					</Form.Group>
				</Form>
				<Table celled padded>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell singleLine>Date</Table.HeaderCell>
							<Table.HeaderCell>Address</Table.HeaderCell>
							<Table.HeaderCell>Games</Table.HeaderCell>
							<Table.HeaderCell>Players</Table.HeaderCell>
							<Table.HeaderCell>Time</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					{information.map(event => (
						<Table.Body>
							<Table.Row>
								<Table.Cell>
									<Header as="h2" textAlign="center">
										{event.date}
									</Header>
								</Table.Cell>
								<Table.Cell singleLine>{event.address}</Table.Cell>
								<Table.Cell>{event.games}</Table.Cell>
								<Table.Cell textAlign="right">{event.players}</Table.Cell>
								<Table.Cell>{event.time}</Table.Cell>
							</Table.Row>
						</Table.Body>
					))}
				</Table>
			</Fragment>
		);
	}
}

export default NeedPlayers;
