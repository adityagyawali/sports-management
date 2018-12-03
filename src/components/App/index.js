import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import NeedPlayers from "../NeedPlayers";

import MainLayout from "../MainLayout";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/app" component={MainLayout} />
					<Redirect from="/" to="/app" exact />
					<Route exact path="/find-players" component={NeedPlayers} />
					<Route render={() => <h1>404</h1>} />
				</Switch>
			</Router>
		);
	}
}

export default App;
