import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../../actions/authAction";
import {
	Button,
	Form,
	Grid,
	Header,
	Message,
	Segment
} from "semantic-ui-react";

class LoginForm extends React.Component {
	state = {
		email: "",
		password: ""
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const { email, password } = this.state;
		const data = {
			email,
			password
		};
		this.props.login(data);
	};

	componentDidUpdate = (prevProps, prevState) => {
		console.log("prevProps", prevProps);
		if (prevProps.auth.isAuthenticated !== this.props.auth.isAuthenticated) {
			this.props.history.push("/");
		}
	};
	render() {
		return (
			<div className="login-form">
				{/*
		  Heads up! The styles below are necessary for the correct render of this example.
		  You can do same with CSS, the main idea is that all the elements up to the `Grid`
		  below must have a height of 100%.
		*/}
				<style>{`
		  body > div,
		  body > div > div,
		  body > div > div > div.login-form {
			height: 100%;
		  }
		`}</style>
				<Grid
					textAlign="center"
					style={{ height: "100%" }}
					verticalAlign="middle">
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" color="teal" textAlign="center">
							Log-in to your account
						</Header>
						<Form size="large" onSubmit={this.handleSubmit}>
							<Segment stacked>
								<Form.Input
									type="email"
									required
									fluid
									icon="user"
									iconPosition="left"
									placeholder="E-mail address"
									name="email"
									onChange={this.handleChange}
									value={this.state.email}
								/>
								<Form.Input
									required
									fluid
									icon="lock"
									iconPosition="left"
									placeholder="Password"
									type="password"
									onChange={this.handleChange}
									value={this.state.password}
									name="password"
								/>

								<Button color="teal" fluid size="large">
									Login
								</Button>
							</Segment>
						</Form>
						<Link to="/register">
							<Message>New to us? Sign Up</Message>
						</Link>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ login }
)(LoginForm);
