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
import Axios from "axios";

class LoginForm extends React.Component {
	state = {
		email: "",
		password: "",
		error: ""
	};
	handleChane = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const { email, password } = this.state;
		const loggedUser = {
			email,
			password
		};
		Axios.post("http://localhost:8000/api/user/login", loggedUser).then(res => {
			if (res.status === 201) {
				window.alert("username or password incorrect");
			} else if (res.status === 200) {
				this.props.history.push("/app");
			} else {
				window.alert("Login NOt successfull");
			}
		});
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
					verticalAlign="middle"
				>
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
									onChange={this.handleChane}
									value={this.state.email}
								/>
								<Form.Input
									required
									fluid
									icon="lock"
									iconPosition="left"
									placeholder="Password"
									type="password"
									onChange={this.handleChane}
									value={this.state.password}
									name="password"
								/>

								<Button color="teal" fluid size="large">
									Login
								</Button>
							</Segment>
						</Form>
						<Message>
							New to us? <Link to="/register">Sign Up</Link>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default withRouter(LoginForm);
