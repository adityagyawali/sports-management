import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../../actions/authAction";
import {
	Button,
	Form,
	Grid,
	Header,
	Message,
	Segment
} from "semantic-ui-react";

class SignupForm extends React.Component {
	state = {
		name: "",
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
		const { name, email, password } = this.state;
		const data = {
			name,
			email,
			password
		};
		this.props.register(data, this.props.history);
	};
	render() {
		return (
			<div className="signup-form">
				{/*
		  Heads up! The styles below are necessary for the correct render of this example.
		  You can do same with CSS, the main idea is that all the elements up to the `Grid`
		  below must have a height of 100%.
		*/}
				<style>{`
		  body > div,
		  body > div > div,
		  body > div > div > div.signup-form {
			height: 100%;
		  }
		`}</style>
				<Grid
					textAlign="center"
					style={{ height: "100%" }}
					verticalAlign="middle">
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" color="teal" textAlign="center">
							Create a new account
						</Header>
						<Form size="large" onSubmit={this.handleSubmit}>
							<Segment stacked>
								<Form.Input
									type="text"
									required
									fluid
									icon="user"
									iconPosition="left"
									placeholder="Full Name.."
									name="name"
									onChange={this.handleChange}
									value={this.state.name}
								/>
								<Form.Input
									type="email"
									required
									fluid
									icon="mail"
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
									name="password"
									onChange={this.handleChange}
									value={this.state.password}
								/>

								<Button color="teal" fluid size="large">
									Sign Up
								</Button>
							</Segment>
						</Form>
						<Link to="/login">
							{" "}
							<Message>Already a member? Login</Message>
						</Link>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default withRouter(
	connect(
		null,
		{ register }
	)(SignupForm)
);
