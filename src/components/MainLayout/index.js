import React from "react";
import Sport from "../SportSection";

import Header from "../Header"; // Adit ==> margin-bottom: 0; border-radius: 0px; can you add this style ?
import Footer from "../Footer";
import ImageRolling from "../Body";
import { Form } from "semantic-ui-react";
import App from "../App";


class DisplayMessages extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<ImageRolling />

				<Sport />

				<Footer />
				

			</div>
		);
	}
}

export default DisplayMessages;
