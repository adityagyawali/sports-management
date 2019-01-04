import React from "react";
import {Form,Container, Dropdown, Divider, Input, Button} from "semantic-ui-react";
import {withRouter} from 'react-router-dom'
import "./NeedPlayers.css";

import {addToNeedPlayerList} from '../../actions/needPlayersActions';
import {connect} from 'react-redux';

class NeedPlayers extends React.Component {

	state = {
		category: "",
		title:"",
		date: "", 
		region: "",
		address: "",
		amPm: "",
		hour:"",
		minute: "",
		players: "",
		joinedPlayers: 0,
		duration:"", 
		cost: "",
		mobile: "",
		email: "",
		description:""

	}

	handleChange = (e, { value, name }) => this.setState({ [name] : value })
	handleSearchChange = (e, { name, searchQuery }) => this.setState({ [name] : searchQuery })
	handleInput = (e) => { this.setState({ [e.target.name] : e.target.value	});	} 
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(addToNeedPlayerList(this.state, () => { 
			this.props.history.push('/eventList'); 
		}));
	}


	render (){
		const {categoryOptions,regionOptions } = this.props;
		return (
			<Container fluid className="findGuest">
				<Container className="header">
					<h1>Welcome to Sport Management App</h1>
					<h3>Please specify the Sport and players you need</h3>
				</Container>
				<Divider />
				<Container className="findGuestForm">
					<Form onSubmit={this.handleSubmit}>
						<Form.Field inline>
							<label htmlFor="category">Category: </label>
							<Dropdown 
								name="category"
								className="findGuestForm_input"
								clearable selection search
								autoComplete="true"
								options={categoryOptions}
								onChange={this.handleChange}
								onSearchChange={this.handleSearchChange}
								value={this.state.category}
								placeholder="What Sports ..." 
							/>
						</Form.Field>

						<Form.Field inline>
							<label htmlFor="title">Title : </label>
							<Input name="title" placeholder='Describe the event shortly ...'
									type="text" onChange={this.handleInput} 
									className="title_input"
							 />
						</Form.Field>						
						
						<br/>
						<br/>
						<Form.Field inline>
							<label htmlFor="date">Date : </label>
							<Dropdown 
								name="date"
								className="findGuestForm_input"
								clearable selection search
								autoComplete="true"
								options={regionOptions}
								onChange={this.handleChange}
								onSearchChange={this.handleSearchChange}
								value={this.state.date}
								placeholder="When is the Date ..." 
							/>                             
						</Form.Field>
						<Form.Field inline>
							<label htmlFor="region">Region : </label>
							<Dropdown 
								name="region"
								className="findGuestForm_input"
								clearable selection search
								autoComplete="true"
								options={regionOptions}
								onChange={this.handleChange}
								onSearchChange={this.handleSearchChange}
								value={this.state.region}
								placeholder="Where is the Location..." 
							/>                             
						</Form.Field>
						<Form.Field inline>
							<label htmlFor="address">Address: </label>
							<Input name="address" placeholder='Describe the address ...'
									type="text" onChange={this.handleInput} 
									className="title_input"
							 />
						</Form.Field> 						
						
						<Form.Field inline>
							<label htmlFor="time">Time: </label>
							<span name="time">
								<Button.Group>
									<Button attached="left" >
										<label className="smallLabel">
											<input name="amPm"
												type="radio"  
												onClick={this.handleInput}												
												value="AM"
											/>
											<span>AM</span>
										</label>
									</Button>
									<Button attached="right">
										<label className="smallLabel">
											<input name="amPm"
													type="radio"  
													onClick={this.handleInput}
													value="PM"
												/>
											<span>PM</span>
										</label>
									</Button>
								</Button.Group>
								<Input name="hour"  label='Hour' placeholder='9' 
									type="number" onChange={this.handleInput}
									className="time_input" min="1" max="12"/>
								<Input name="minute"  label='Minutes' placeholder='30' 
									type="number" onChange={this.handleInput} 
									className="time_input" min="0" max="59"/>
							</span>
						</Form.Field> 

						<br />
						<br/>
						<Form.Field inline>
							<label htmlFor="players">Players : </label>
							<Input name="players" placeholder='Describe the players ...'
									type="number" onChange={this.handleInput} 
									className="title_input"
									min="1" max="15"
							/>
						</Form.Field> 
						
						<Form.Field inline>
							<label htmlFor="duration">Duration: </label>
							<Input name="duration" placeholder='Describe the duration as hour ...'
									type="number" onChange={this.handleInput} 
									className="title_input"
									min="1" max="5"
									 
							/>
						</Form.Field> 
						
						<br />
						<br/>
						<Form.Field inline>
							<label htmlFor="cost">Cost: </label>
							<Input name="cost" label="Euro" placeholder='Describe the cost per person ...'
									type="number" onChange={this.handleInput} 
									className="title_input"
									min="0" max="30"
									 
							/>
						</Form.Field> 
						<br/>
						<br/>
						<Divider horizontal>Optional Information</Divider>
						<br />
						<br/>
						<Form.Field inline>
							<label htmlFor="contact">Contact: </label>
							<span name="contact" className="findGuestForm_input">

								<Input name="mobile" label='Mobile' placeholder='0466298287'
									className="contactInput"
									type="text" onChange={this.handleInput}									
									 />
							
								<Input name="email" label='Email' placeholder='myEmail@mail.com' 
									className="contactInput"
									type="email" onChange={this.handleInput} />
							</span>
						</Form.Field>

						<Form.Field inline>
							<label htmlFor="description">Description: </label>
							<textarea name="description" className="findGuestForm_input description_input"
								onChange={this.handleInput}
							></textarea>	
						</Form.Field> 
						
						<Container className="submitButton">
							<Button color="blue" type="submit" >Post event !</Button>
							<Button >Cancel</Button>
						</Container>
					</Form>
				</Container>
			</Container>
		
		);
	}
}

NeedPlayers.defaultProps = {
	categoryOptions : [
		{ key: 1, text: 'ALL', value: 'ALL' },
		{ key: 2, text: 'BASKET BALL', value: 'BASKET BALL' },
		{ key: 3, text: 'FOOT BALL', value: 'FOOT BALL' },
		{ key: 4, text: 'BADMINTON', value: 'BADMINTON' },
		{ key: 5, text: 'ICE HOCKEY', value: 'ICE HOCKEY' },
	],
	regionOptions : [
		{ key: 1, text: 'ALL', value: 'ALL' },
		{ key: 2, text: 'Helsinki', value: 'Helsinki' },
		{ key: 3, text: 'Espoo', value: 'Espoo' },
		{ key: 4, text: 'Vantaa', value: 'Vantaa' },
	]
}
export default withRouter(connect()(NeedPlayers));