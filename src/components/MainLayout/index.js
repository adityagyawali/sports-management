import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../../actions/addMessage";

import Header from "../Header";
import Footer from "../Footer";

class DisplayMessages extends React.Component {
	state = {
		input: ""
	};

	handleChange = e => {
		e.preventDefault();
		this.setState({
			input: e.target.value
		});
	};

	submitMessage = () => {
		this.props.onAddMessage(this.state.input);
		this.setState({
			input: ""
		});
	};

	render() {
		const newMessage = this.props.newMessage.map(message => (
			<li> {message} </li>
		));
		return (
			<div>
				<Header />
				<h2>Type in a new Message:</h2>
				<input
					type="text"
					value={this.state.input}
					onChange={this.handleChange}
				/>
				<button onClick={this.submitMessage}>Submit</button>
				<ul>{newMessage}</ul>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	newMessage: state.add
});

const mapDispatchToProps = dispatch => {
	return {
		onAddMessage: msg => dispatch(addMessage(msg))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DisplayMessages);
