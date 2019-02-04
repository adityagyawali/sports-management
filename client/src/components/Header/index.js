import React, { Component } from "react";
import { Menu, Segment, Icon, Image, Dropdown, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import "./index.css";
import Mark from '../../assets/mark.png';

import { logout } from '../../actions/signUp_LogInActions'
import { connect } from "react-redux";

class Header extends Component {
	state = { activeItem: "app" };

	componentDidMount(){
		let page = (window.location.hash.split("/")[1]) 
		if (page.includes("?")) page = page.split("?")[0]
		this.setState({ activeItem :  page})
	}

	handleLogout = () => {
		this.props.dispatch(logout( ()=> {
			this.props.history.push("/")
		}))
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	getTrigger = () => {
		if( (this.props.isLogged) ){
			return (<span>
				<Image avatar src={Mark} /> {this.props.userName.split("@")[0]}
				  </span>
			)	
		}
	}

	getUserOptions = ()=> {
		return ([
			{ key: 'sign-out', text: (<span onClick={this.handleLogout}>Sign Out</span>), icon: 'sign out'},
		])
	}
	

	render() {
		const { activeItem } = this.state;
		const trigger = this.getTrigger();
		const userOptions = this.getUserOptions();

		console.log("this.props.isLogged", this.props.isLogged);
		
		return (
			<Segment inverted>
				<Menu inverted secondary>
					<Menu.Item
						name="Home"
						active={activeItem === "app"}
						onClick={this.handleItemClick}
						as={Link} 
						to='/app'
					/>

					<Menu.Item
						name="Need Players"
						active={activeItem === "needPlayers"}
						onClick={this.handleItemClick}
						as={Link} 
						to="/needPlayers"
					/>

					<Menu.Item
						name="Find Events"
						active={activeItem === "eventList"}
						onClick={this.handleItemClick}
						as={Link} 
						to="/eventList"
					/>

					<Menu.Menu position='right'>
						<Button color="black">
					{this.props.isLogged ? (
						<Dropdown trigger={trigger} options={userOptions} icon={null} style={{margin: "auto"}}/>
					):(
						<Link to="/logIn"><Icon name="user" />Log in</Link>
					)}
						</Button>
					</Menu.Menu>
		
				</Menu>
			</Segment>
		);
	}
}

const mapStateToProps = state => ({
	isLogged: state.login.isLogged,
	userName: state.login.userName
});

export default withRouter(connect(mapStateToProps)(Header));
