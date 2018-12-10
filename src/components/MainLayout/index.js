import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import ImageRolling from "../ImageRolling";
import SportCardSection from "../SportSection";


class MainLayout extends React.Component {
	render() {
		return (
			<div>
				<Header />
				
				<ImageRolling />
				<SportCardSection />

				<Footer />
			</div>
		);
	}
}

export default MainLayout;
