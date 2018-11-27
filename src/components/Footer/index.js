import React from "react";
import { Container } from "semantic-ui-react";
import "./index.css";

const Footer = () => {
	return (
		<Container className="footer" fluid>
			<span style={{ color: "white" }}>
				Copyright <span className="copyright">&copy;</span> 2018 Sports
				Management. All Rights Reserved.
			</span>
			<br />
			<br />
			<span style={{ color: "white" }}>Follow us on:</span>
			<a role="button">
				<i className="facebook icon" />
			</a>
			<a href="#">
				<i className="twitter icon" />
			</a>
			<a href="#">
				<i className="linkedin icon" />
			</a>
			<a href="#">
				<i className="google icon" />
			</a>
			<a href="#">
				<i className="skype icon" />
			</a>
		</Container>
	);
};

export default Footer;
