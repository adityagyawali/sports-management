import React from "react";
import { Container } from 'semantic-ui-react';
import "./index.css";

const Footer = () => {

	return (<Container className="footer" fluid>
			<span style={{"color":"white"}} >Copyright <span className="copyright">&copy;</span> 2018 Sports Management. All Rights Reserved.</span>
			<br/>
			<br />
			<span style={{"color":"white"}} >Follow us on:</span>
			<a href="#"><i class="facebook icon"></i></a>
			<a href="#"><i class="twitter icon"></i></a>
			<a href="#"><i class="linkedin icon"></i></a>
			<a href="#"><i class="google icon"></i></a>
			<a href="#"><i class="skype icon"></i></a>
		</Container>
	);
};

export default Footer;
