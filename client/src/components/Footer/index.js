import React from "react";
import { Container } from 'semantic-ui-react';
import "./index.css";

const Footer = () => {

	return (<Container className="footer" fluid>
			<span style={{"color":"white"}} >Copyright <span className="copyright">&copy;</span> 2018 Sports Management. All Rights Reserved.</span>
			<br/>
			<br />
			<span style={{"color":"white"}} >Follow us on:</span>
			<a href="www.facebook.com"><i className="facebook icon"></i></a>
			<a href="www.twitter.com"><i className="twitter icon"></i></a>
			<a href="www.linkedin.com"><i className="linkedin icon"></i></a>
			<a href="www.google.com"><i className="google icon"></i></a>
			<a href="www.skype.com"><i className="skype icon"></i></a>
		</Container>
	);
};

export default Footer;
