import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";

import MainLayout from "../MainLayout";
import EventLayout from "../EventLayout";
import LogIn from '../SignUpLogin/LogIn';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/app" component={MainLayout} />
					<Route path="/eventList" component={EventLayout} />
					<Route path="/logIn" component={LogIn} />

					<Redirect from="/" to="/app" exact />				
					<Route render={() => <h1>404</h1>} />
				</Switch>
			</Router>
		);
	}
}

export default App;
