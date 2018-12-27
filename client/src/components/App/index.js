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
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import NeedPlayerLayout from "../NeedPlayerLayout";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/app" component={MainLayout} />
					<Route exact path="/eventList" component={EventListLayout} />
					<Route exact path="/eventDetails" component={EventDetailsLayout} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={SignUp} />
					<Route exact path="/needPlayers" component={NeedPlayerLayout} />

					<Redirect from="/" to="/app" exact />
					<Route render={() => <h1>404</h1>} />
				</Switch>
			</Router>
		);
	}
}

export default App;
