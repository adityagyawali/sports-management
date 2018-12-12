import React from "react";
import {Container} from 'semantic-ui-react';

import Header from "../Header";
import Footer from "../Footer";
import FindGuestsForm from './FindGuests';

class MainLayout extends React.Component {
	render() {
		return (
			<Container fluid>
				<Header />				
				<FindGuestsForm />
				<Footer />
			</Container>
		);
	}
}

export default MainLayout;