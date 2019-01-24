import React from "react";

import { Container } from "semantic-ui-react";

import Header from '../../Header';
import Footer from '../../Footer';
import SignupForm from './SignUp';

import {signUp} from '../../../actions/signUp_LogInActions';
import { connect } from "react-redux";

class SignupPage extends React.Component {

	handleSignUp = (data) => {
		console.log(data)
		this.props.dispatch(signUp(data, ()=>{
			this.props.history.push("/login")
		}))
	}

	render() {
		return (
			<Container fluid>
			
				<Header />
				<SignupForm onSignUp={this.handleSignUp}/>
				<Footer/>
			
			</Container>
		);
	}
}

export default connect()(SignupPage);
