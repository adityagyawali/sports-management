import React, { Component } from "react";
import { Menu, Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./index.css";

import { logout } from '../../actions/signUp_LogInActions'
import { connect } from "react-redux";

class Header extends Component {
	state = { activeItem: "Home" };

	handleLogout = () => {
		this.props.dispatch(logout());
	}; 

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;
		console.log("this.props.isLogged", this.props.isLogged);
		return (
			<Segment inverted>
				<Menu inverted secondary>
					<Menu.Item
						name="Home"
						active={activeItem === "Home"}
						onClick={this.handleItemClick}
						as={Link} 
						to='/app'
					/>

					<Menu.Item
						name="Need Players"
						active={activeItem === "Need Players"}
						onClick={this.handleItemClick}
						as={Link} 
						to="/needPlayers"
					/>

					<Menu.Item
						name="Find Events"
						active={activeItem === "Find Events"}
						onClick={this.handleItemClick}
						as={Link} 
						to="/eventList"
					/>

					<Menu.Menu position="right">
						<Menu.Item>
							<Button primary>
								{this.props.isLogged ?  (<Link to="/" onClick={this.handleLogout}>Log Out</Link>) : (<Link to="/login">Log In</Link>) }
							</Button>
						</Menu.Item>
					</Menu.Menu>
		
				</Menu>
			</Segment>
		);
	}
}

const mapStateToProps = state => ({
	isLogged: state.login.isLogged
});

export default connect(mapStateToProps)(Header);
