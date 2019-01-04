import React from "react";
import {Container} from "semantic-ui-react";

import Header from "../Header";
import Footer from "../Footer";
import MainImageRolling from "./MainImageRolling";
import SportCardSection from "../SportSection";


class MainLayout extends React.Component {
	render() {
		return (
			<Container fluid>
				<Header />
				
				<MainImageRolling />
				<SportCardSection />

				<Footer />
			</Container>
		);
	}
}

export default MainLayout;
