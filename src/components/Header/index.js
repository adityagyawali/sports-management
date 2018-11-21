import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class Header extends Component {
	state = { activeItem: "home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu secondary>
				<Menu.Item
					name="home"
					active={activeItem === "home"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="messages"
					active={activeItem === "messages"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="friends"
					active={activeItem === "friends"}
					onClick={this.handleItemClick}
				/>
				<Menu.Menu position="right">
					<Menu.Item
						name="login"
						active={activeItem === "login"}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name="Sign Up"
						active={activeItem === "Sign Up"}
						onClick={this.handleItemClick}
					/>
				</Menu.Menu>
			</Menu>
		);
	}
}

export default Header;
