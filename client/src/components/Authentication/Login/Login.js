import React from "react";
import {Button, Form, Grid, Header,Message, Container, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./Login.css"

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
		this.props.onLogIn(data);
	};

	render() {
		return (
			<Container className="login-form">
				<Grid
					textAlign="center"
					style={{ height: "100%" }}
					verticalAlign="middle">
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" textAlign="center">
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

								<Button color="blue" fluid size="large">
									Login
								</Button>
							</Segment>
						</Form>
						<Link to="/signUp">
							<Message>New to us? <span className="boldText"> Sign Up </span></Message>
						</Link>
					</Grid.Column>
				</Grid>
			</Container>
		);
	}
}

export default LoginForm;