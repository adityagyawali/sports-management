import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";

import MainLayout from "../MainLayout";
import SignupForm from "../Authentication/SignUp";
import LoginForm from "../Authentication/Login";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/app" component={MainLayout} />
					<Route path="/register" component={SignupForm} />
					<Route path="/login" component={LoginForm} />
					<Redirect from="/" to="/app" exact />
					<Route render={() => <h1>404</h1>} />
				</Switch>
			</Router>
		);
	}
}

export default App;
