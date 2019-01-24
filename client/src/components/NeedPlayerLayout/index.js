import React from "react";
import {Container} from 'semantic-ui-react';

import Header from "../Header";
import Footer from "../Footer";
import NeedPlayersForm from './NeedPlayers';
import {addToNeedPlayerList, getSportsCategory, getRegionCategory} from '../../actions/needPlayersActions';
import {connect} from 'react-redux';

class NeedPlayerLayout extends React.Component {
	
    componentDidMount(){  
        if(!this.props.isLogged){
            alert("You need Log in first!!")
            this.props.history.push("/login")
		}else{
			this.props.dispatch(getSportsCategory())
			this.props.dispatch(getRegionCategory())
		}
	}

	handleSubmit= (item) => {
		this.props.dispatch(addToNeedPlayerList(item, () => { 
			this.props.history.push('/eventList'); 
		}));
	}
	
	render() {
		return (
			<Container fluid>
				<Header />				
				<NeedPlayersForm onSubmit={this.handleSubmit} loggedUserId={this.props.loggedUserId} regionCategoryList={this.props.regionCategoryList} sportCategoryList={this.props.sportCategoryList}/>
				<Footer />
			</Container>
		);
	}
}

const mapStateToProps = (state)=> ({
	isLogged: state.login.isLogged,
	loggedUserId : state.login.userId,
	regionCategoryList: state.needPlayerList.regionCategoryList,
	sportCategoryList: state.needPlayerList.sportCategoryList
})

export default connect(mapStateToProps)(NeedPlayerLayout);