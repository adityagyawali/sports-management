import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
	Button,
	Form,
	Grid,
	Header,
	Message,
	Segment
} from "semantic-ui-react";
import axios from "axios";

class SignupForm extends React.Component {
	state = {
		email: "",
		password: "",

		isLoading: false
	};

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const { email, password } = this.state;
		const userData = {
			email,
			password
		};
		this.setState({
			isLoading: true
		});
		axios
			.post("http://localhost:8000/api/user/register", userData)
			.then(res => {
				if (res.status === 200) {
					this.props.history.push("/login");
				}
			});
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
					verticalAlign="middle"
				>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" color="teal" textAlign="center">
							Create a new account
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
									name="password"
									onChange={this.handleChange}
									value={this.state.password}
								/>

								<Button color="teal" fluid size="large">
									Sign Up
								</Button>
							</Segment>
						</Form>
						<Message>
							Already a member? <Link to="/login">Login</Link>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default withRouter(SignupForm);
