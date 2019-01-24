import React from "react";
import { Link } from "react-router-dom";

import { Button,Form, Grid,Header, Message, Segment, Container} from "semantic-ui-react";
import './SignUp.css';

class SignupForm extends React.Component {
	state = {
		username: "",
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
        this.props.onSignUp(this.state);
	};
    
    render() {
		return (
			<Container className="signup-form">
				<Grid
					textAlign="center"
					style={{ height: "100%" }}
					verticalAlign="middle">
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" textAlign="center">
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
									name="username"
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

								<Button color="blue" fluid size="large">
									Sign Up
								</Button>
							</Segment>
						</Form>
						<Link to="/login">
							<Message>Already a member? <span className="boldText"> Login </span></Message>
						</Link>
					</Grid.Column>
				</Grid>
			</Container>
		);
	}
}

export default SignupForm;
