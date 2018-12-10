import React, { Component } from "react";
import { Menu, Segment, Button } from "semantic-ui-react";
import './index.css';

export default class MenuExampleInvertedSegment extends Component {
	state = { activeItem: "Home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Segment inverted>
				<Menu inverted secondary>
					<Menu.Item
						name="Home"
						active={activeItem === "Home"}
						onClick={this.handleItemClick}
						href="/app"
					/>
					<Menu.Item
						name="Find Guests"
						active={activeItem === "Find Guests"}
						onClick={this.handleItemClick}
						href="/findGuests"
					/>
					<Menu.Item
						name="Find Events"
						active={activeItem === "Find Events"}
						onClick={this.handleItemClick}
						href="/eventList"
					/>
				
					<Menu.Menu position="right">
						<Menu.Item>
							<Button primary><a href="/signUp">Sign Up</a></Button>
						</Menu.Item>
						<Menu.Item>
							<Button primary><a href="/logIn">Log In</a></Button>
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</Segment>
		);
	}
}
