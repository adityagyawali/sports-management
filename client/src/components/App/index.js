import React, { Component } from "react";
import { HashRouter,
	//BrowserRouter as Router,
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
import ModifyEvent from "../ModifyEventLayout";

class App extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path="/app" component={MainLayout} />
					<Route exact path="/eventList" component={EventListLayout} />
					<Route path="/eventDetails" component={EventDetailsLayout} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={SignUp} />
					<Route exact path="/needPlayers" component={NeedPlayerLayout} />
					<Route path="/modifyEvent" component={ModifyEvent} />

					<Redirect from="/" to="/app" exact />
					<Route render={() => <h1>404</h1>} />
				</Switch>
			</HashRouter>
		);
	}
}

export default App;
