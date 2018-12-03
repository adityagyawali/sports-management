import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import ImageRolling from "../ImageRolling";
import Sport from "../SportSection";


class DisplayMessages extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<ImageRolling />
				<h1 style={{textAlign: "center"}}>Explore the sport by categories </h1>
				<Sport />

				<Footer />
			</div>
		);
	}
}

export default DisplayMessages;
