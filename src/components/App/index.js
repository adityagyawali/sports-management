import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";

import MainLayout from "../MainLayout";
import EventListLayout from "../EventListLayout";
import EventDetailsLayout from "../EventDetailsLayout";
import LogIn from '../SignUpLogin/LogIn';
import NeedPlayerLayout from '../NeedPlayerLayout';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/app" component={MainLayout} />
					<Route exact path="/eventList" component={EventListLayout} />
					<Route path="/eventDetails" component={EventDetailsLayout}/>
					<Route path="/logIn" component={LogIn} />
					<Route path="/needPlayers" component={NeedPlayerLayout}/>

					<Redirect from="/" to="/app" exact />				
					<Route render={() => <h1>404</h1>} />
				</Switch>
			</Router>
		);
	}
}

export default App;
