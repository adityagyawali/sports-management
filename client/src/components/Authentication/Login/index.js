import React from "react";

import { Container } from "semantic-ui-react";
import Header from '../../Header';
import Footer from '../../Footer';
import LoginForm from './Login';

import { logIn } from '../../../actions/signUp_LogInActions'
import { connect } from "react-redux";

class LoginPage extends React.Component {

	componentWillMount(){
		if(this.props.isLogged){
			alert("You are already logged in as "+ this.props.loggedUserName )
			this.props.history.push("/eventList")
		}
	}

	handleLogin = (data)=>{
		this.props.dispatch(logIn( data, ()=>{
			this.props.history.push("/")
		}))
	}

	render() {

		return (
			<Container fluid>
				<Header/>
				<LoginForm onLogIn={this.handleLogin}/>
				<Footer />
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	isLogged: state.login.isLogged,
	loggedUserName: state.login.userName
})

export default connect(mapStateToProps)(LoginPage);
