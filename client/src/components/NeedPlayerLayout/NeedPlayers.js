import React from "react";
import {Form,Container, Dropdown, Divider, Input, Button} from "semantic-ui-react";

import Calendar from 'react-calendar'
import "./NeedPlayers.css";

class NeedPlayers extends React.Component {

	state = {
		category: "",
		title:"",
		date: new Date(), 
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
		description:"",
		userId: this.props.loggedUserId,
		isNewCategory: false,
		newCategory:""
	}

	handleChange = (e, { value, name }) => {
		if ( value === "Other"){// Other cateogry 
			this.setState({ isNewCategory: true})
			this.setState({ [name] : value })
		}else{
			this.setState({ isNewCategory: false})
			this.setState({ [name] : value })
		}
	}
	//dropdwon
	handleSearchChange = (e, { name, searchQuery }) =>	this.setState({ [name] : searchQuery })
	handleInput = (e) => this.setState({ [e.target.name] : e.target.value});	
	onChange = (date) => this.setState({ date }) 
	
	handleSubmit = (e) => {
		console.log("handle submit")
		e.preventDefault();
		let tempCategory;
		if (this.state.category === "Other" && (this.state.newCategory).length > 0){
			tempCategory = this.state.newCategory.toUpperCase();
		}else{
			tempCategory = this.state.category;
		}
		let tempMinute = ('0'+ this.state.minute).slice(-2);
		



		
		let item = {
			category: tempCategory,
			title:this.state.title,
			date: this.state.date, 
			region: this.state.region,
			address: this.state.address,
			amPm: this.state.amPm,
			hour:this.state.hour,
			minute: tempMinute,
			players: this.state.players,
			joinedPlayers: 0,
			duration:this.state.duration, 
			cost: this.state.cost,
			mobile: this.state.mobile,
			email: this.state.email,
			description:this.state.description,
			userId: this.props.loggedUserId,
			userName: this.props.loggedUserName
		}
		
		this.props.onSubmit(item)
	}

	handleCancel = (e) => {
		console.log("handleCancel")
		e.preventDefault();
		this.props.onCancel();
	}

	getCategoryOptions = (categoryList) => {
		let tempOptions = categoryList.map( ( ele, index) => {
			return ({ key: index, text: ele.category, value: ele.category});
		})

		tempOptions.splice(0,0, {key: tempOptions.length, text: "Other", value: "Other"})
		return tempOptions; 
	}

	getRegionOptions = (categoryList) => {
		let tempOptions = categoryList.map( ( ele, index) => {
			return ({ key: index, text: ele.region, value: ele.region});
		})

		tempOptions.splice(0,0, {key: tempOptions.length, text: "All", value: "All"})
		return tempOptions; 
	}

	render (){
		const {sportCategoryList,regionCategoryList } = this.props;
		const sportsCategoryOptions = this.getCategoryOptions(sportCategoryList);
		const regionCategoryOptions = this.getRegionOptions(regionCategoryList);

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
								options={sportsCategoryOptions}
								onChange={this.handleChange}
								onSearchChange={this.handleSearchChange}
								value={this.state.category}
								placeholder="What Sports ..."
								required 
							/>
						</Form.Field>
					{this.state.isNewCategory ?
						<Form.Field inline>
							<label htmlFor="newCategory">New Category : </label>
							<Input name="newCategory" placeholder='Create new Category ...'
									type="text" onChange={this.handleInput} className="title_input" required
							/>
						</Form.Field> 
					: ""}
						<Form.Field inline>
							<label htmlFor="title">Title : </label>
							<Input name="title" placeholder='Describe the event shortly ...'
									type="text" onChange={this.handleInput} 
									className="title_input" required
							 />
						</Form.Field>						
						
						<br/>
						<br/>
						<Form.Field inline>
							<label htmlFor="date">Date : </label>

							<Calendar
								name="date"
								className="findGuestForm_calendar"
								onChange={this.onChange}
								value={this.state.date}
							/>                              
						</Form.Field>
						<Form.Field inline>
							<label htmlFor="region">Region : </label>
							<Dropdown 
								name="region"
								className="findGuestForm_input"
								clearable selection search
								autoComplete="true"
								options={regionCategoryOptions}
								onChange={this.handleChange}
								onSearchChange={this.handleSearchChange}
								value={this.state.region}
								placeholder="Where is the Location..." 
								required
							/>                             
						</Form.Field>
						<Form.Field inline>
							<label htmlFor="address">Address: </label>
							<Input name="address" placeholder='Describe the address ...'
									type="text" onChange={this.handleInput} 
									className="title_input"
									required
							 />
						</Form.Field> 						
						
						<Form.Field inline>
							<label htmlFor="time">Time: </label>
							<span name="time">
								<Button.Group>
									<label className="smallLabel">
										<Button attached="left">
											<input name="amPm"
												type="radio"  
												onClick={this.handleInput}												
												value="AM"
											/>
											<span>AM</span>
										</Button>
									</label>
									<label className="smallLabel">
										<Button attached="right" onClick={this.handleAmPmButton}>										
											<input name="amPm"
													type="radio"  
													onClick={this.handleInput}
													value="PM"
												/>
											<span>PM</span>
										</Button>
									</label>
								</Button.Group>
								<Input name="hour"  label='Hour' placeholder='9' 
									type="number" onChange={this.handleInput}
									className="time_input" min="1" max="12" required/>
								<Input name="minute"  label='Minutes' placeholder='30' 
									type="number" onChange={this.handleInput} 
									className="time_input" min="00" max="59" required/>
							</span>
						</Form.Field> 

						<br />
						<br/>
						<Form.Field inline>
							<label htmlFor="players">Players : </label>
							<Input name="players" placeholder='Describe the players ...'
									type="number" onChange={this.handleInput} 
									className="title_input"
									min="1" max="15" required
							/>
						</Form.Field> 
						
						<Form.Field inline>
							<label htmlFor="duration">Duration: </label>
							<Input name="duration" placeholder='Describe the duration as hour ...'
									type="number" onChange={this.handleInput} 
									className="title_input"
									min="1" max="5" required
							/>
						</Form.Field> 
						
						<br />
						<br/>
						<Form.Field inline>
							<label htmlFor="cost">Cost: </label>
							<Input name="cost" label="Euro" placeholder='Describe the cost per person ...'
									type="number" onChange={this.handleInput} 
									className="title_input"
									min="0" max="30" required
									 
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
									type="text" onChange={this.handleInput}	required								
									 />
							
								<Input name="email" label='Email' placeholder='myEmail@mail.com' 
									className="contactInput"
									type="email" onChange={this.handleInput} required/>
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
							<Button onClick={this.handleCancel}>Cancel</Button>
						</Container>
					</Form>
				</Container>
			</Container>
		
		);
	}
}

export default NeedPlayers;