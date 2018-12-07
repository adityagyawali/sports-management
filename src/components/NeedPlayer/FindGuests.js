import React from "react";
import {
	Button,
	Form,
	Icon,
	Message,
	Container,
	Card
} from "semantic-ui-react";
import "./FindGuests.css";

const FindGuests = () => (
	<div>
		<Container className="Message">
			<Message
				color="black"
				size="big"
				position="right"
				attached
				header="Welcome to Sport Managment APP !"
				content="Please Specify the Sport and Player you need "
			/>

			<Form className="Catagory">
				<Form.Field
					className="FormField"
					label="Choose Sport Catagory"
					control="select"
				>
					<option value="football">Football</option>
					<option value="basketball">Basketball</option>
					<option value="badminton">Badminton</option>
					<option value="icehockey">Icehockey</option>
					<option value="tennis">Tennis</option>
					<option value="golf">Golf</option>
					<option value="ski">Ski</option>
				</Form.Field>

				<Form.Group className="Form.group" widths="equal">
					<Form.Field
						label="Player Pay to Join"
						control="input"
						type="checkbox"
					/>
					<Form.Field
						label="Player Free to Join"
						control="input"
						type="checkbox"
					/>
					<Form.Field label="Choose Location" control="select">
						<option value="Helsinki">Helsinki</option>
						<option value="Espoo">Espoo</option>
						<option value="Vantaa">Vantaa</option>
						<option value="Kaunianen">Kaunianen</option>
					</Form.Field>
				</Form.Group>

				<Form.Field
					color="green"
					label="Player needed request"
					control="textarea"
					rows="3"
				/>
				<Form.Field label="" control="button">
					Post
				</Form.Field>

				<Form.Group widths="equal">
					<Form.Input
						fluid
						label="Team Name"
						placeholder="Team Name"
						type="text"
					/>
					<Form.Input
						fluid
						label="Street Address"
						placeholder="Street Addres "
						type="text"
					/>
				</Form.Group>

				<Form.Input label="Username" placeholder="Username" type="text" />
				<Form.Input label="Password" type="password" />

				<Form.Checkbox inline label="I agree to the terms and conditions" />
				<Button color="green">Submit</Button>
			</Form>

			<Message color="black" attached="bottom" warning>
				<Icon name="help" />
				Sign Up to Post on this Form &nbsp;
				<a href="#"> Go back to the Top here</a>
				&nbsp;
			</Message>
		</Container>
	</div>
);

export default FindGuests;
