import React from "react";
import {Container} from 'semantic-ui-react';

import Header from "../Header";
import Footer from "../Footer";
import NeedPlayersForm from './NeedPlayers';

class MainLayout extends React.Component {
	render() {
		return (
			<Container fluid>
				<Header />				
				<NeedPlayersForm />
				<Footer />
			</Container>
		);
	}
}

export default MainLayout;