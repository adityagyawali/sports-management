import React, { Component } from "react";
import { Menu, Segment, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logOut } from "../../actions/authAction";
import "./index.css";

class Header extends Component {
	state = { activeItem: "Home" };

	logout = e => {
		e.preventDefault();
		this.props.logOut();
		this.props.history.push("/");
	};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;
		console.log("this.props.auth.isAuthenticated", this.props.auth);
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


				{this.props.auth.isAuthenticated ? (
					<Menu.Menu position="right">
						<Menu.Item>
							<Button primary>
								{this.props.auth.user.name.split(" ")[0]}
							</Button>
						</Menu.Item>
						<Menu.Item>
							<Button primary onClick={this.logout}>
								Logout
							</Button>
						</Menu.Item>
					</Menu.Menu>
				) : (
					<Menu.Menu position="right">
						{/* <Menu.Item>
						<Button primary>
							<Link to="/register">Sign Up</Link>
						</Button>
					</Menu.Item> */}
						<Menu.Item>
							<Button primary>
								<Link to="/login">Log In</Link>
							</Button>
						</Menu.Item>
					</Menu.Menu>
				)}
				</Menu>
			</Segment>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default withRouter(
	connect(
		mapStateToProps,
		{ logOut }
	)(Header)
);
