import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import MainImageRolling from "./MainImageRolling";
import SportCardSection from "../SportSection";


class MainLayout extends React.Component {
	render() {
		return (
			<div>
				<Header />
				
				<MainImageRolling />
				<SportCardSection />

				<Footer />
			</div>
		);
	}
}

export default MainLayout;
