import React from 'react';
import {Form,Container, Dropdown, Divider, Input, Button} from 'semantic-ui-react';
import Calendar from 'react-calendar'
import "../NeedPlayerLayout/NeedPlayers.css";


class ModifyEventForm extends React.Component {
    
    state = {
        category: this.props.eventInfo.category,
        title: this.props.eventInfo.title,
        date: new Date(this.props.eventInfo.date), 
        region: this.props.eventInfo.region,
        address: this.props.eventInfo.address,
        amPm: this.props.eventInfo.amPm,
        hour:this.props.eventInfo.hour,
        minute: this.props.eventInfo.minute,
        players: this.props.eventInfo.players,
        duration: this.props.eventInfo.duration,
        cost: this.props.eventInfo.cost,
        mobile: this.props.eventInfo.mobile,
        email: this.props.eventInfo.email,
		description: this.props.eventInfo.description,
		isNewCategory: false,
		newCategory:""
    }
    
    handleChange = (e, { value, name }) => {
		if ( value === "Other"){
			this.setState({ isNewCategory: true})
			this.setState({ [name] : value })
		}else{
			this.setState({ isNewCategory: false})
			this.setState({ [name] : value })
		}
	}
	handleSearchChange = (e, { name, searchQuery }) =>	this.setState({ [name] : searchQuery })
	handleInput = (e) => this.setState({ [e.target.name] : e.target.value});	
	onChange = (date) => this.setState({ date }) 

	handleSubmit = (e) => {
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
			duration:this.state.duration, 
			cost: this.state.cost,
			mobile: this.state.mobile,
			email: this.state.email,
			description:this.state.description,
			modifiedDate: new Date()
		}
		
		this.props.onSubmit(item)
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
							/>
						</Form.Field>
					{this.state.isNewCategory ?
						<Form.Field inline>
							<label htmlFor="newCategory">New Category : </label>
							<Input name="newCategory" placeholder='Create new Category ...'
									type="text" onChange={this.handleInput} className="title_input" 
							/>
						</Form.Field> 
					: ""}
						<Form.Field inline>
							<label htmlFor="title">Title : </label>
							<Input name="title" placeholder='Describe the event shortly ...'
									type="text" onChange={this.handleInput} 
                                    className="title_input"
                                    value={this.state.title}
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
							/>                             
						</Form.Field>
						<Form.Field inline>
							<label htmlFor="address">Address: </label>
							<Input name="address" placeholder='Describe the address ...'
									type="text" onChange={this.handleInput} 
                                    className="title_input"
                                    value={this.state.address}
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
												onChange={this.handleInput}												
												value="AM"
												checked={ this.state.amPm === "AM" ? true : false }
											/>
											<span>AM</span>
										</label>
									</Button>
									<Button attached="right">
										<label className="smallLabel">
											<input name="amPm"
													type="radio"  
													onChange={this.handleInput}
													value="PM"
													checked={ this.state.amPm === "PM" ? true : false }
												/>
											<span>PM</span>
										</label>
									</Button>
								</Button.Group>
								<Input name="hour"  label='Hour' placeholder='9' 
									type="number" onChange={this.handleInput}
									className="time_input" min="1" max="12" value={this.state.hour}/>
								<Input name="minute"  label='Minutes' placeholder='30' 
									type="number" onChange={this.handleInput} 
									className="time_input" min="00" max="59" value={this.state.minute}/>
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
                                    value={this.state.players}
							/>
						</Form.Field> 
						
						<Form.Field inline>
							<label htmlFor="duration">Duration: </label>
							<Input name="duration" placeholder='Describe the duration as hour ...'
									type="number" onChange={this.handleInput} 
									className="title_input"
									min="1" max="5"
                                    value={this.state.duration}
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
									value={this.state.cost} 
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
                                    value={this.state.mobile} 									
								/>
							
								<Input name="email" label='Email' placeholder='myEmail@mail.com' 
									className="contactInput"
									type="email" onChange={this.handleInput} 
                                    value={this.state.email}
                                />
							</span>
						</Form.Field>

						<Form.Field inline>
							<label htmlFor="description">Description: </label>
							<textarea name="description" className="findGuestForm_input description_input"
								onChange={this.handleInput} value={this.state.description}
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

export default ModifyEventForm;