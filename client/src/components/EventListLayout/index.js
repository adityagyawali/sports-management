import React from "react";
import { Container, Loader} from 'semantic-ui-react';
import { connect } from 'react-redux';

import Header from "../Header";
import Footer from "../Footer";
import EventImage from './EventImage';
import SearchBar from './SearchBar';
import EventList from './EventList';

import {getEventList} from '../../actions/eventListActions';

class EventLayout extends React.Component {
    state = {
        list: [],
        isFiltered: false
    }

	componentDidMount() {
        this.props.dispatch(getEventList());
    }

    handleOnChange = ( filteringInfo )=>{
        const allList = this.props.list;
        let { category, cost, region } = filteringInfo;
        let categoryFiltered, regionFiltered, costFiltered;

        if (category !== "ALL"){
            categoryFiltered = allList.filter( element => (
                element.category === category
            ));
        } else categoryFiltered = allList;

        if (region !== "ALL"){
            regionFiltered =  categoryFiltered.filter(element =>(
                element.region === region
            ));
        } else regionFiltered = categoryFiltered;

        if (cost !== "ALL"){
            costFiltered =  regionFiltered.filter(element =>(
                element.cost <= cost 
            ));
        } else costFiltered = regionFiltered;

        this.setState({
            list : costFiltered,
            isFiltered: true
        });
    }   
    
    render() {
        let eventList;
        if (this.props.loading){
            eventList = ( 
                <Loader active inline='centered' />
            )
        }else {
            eventList = ( 
                <EventList eventList={(this.state.isFiltered ? this.state.list : this.props.list)} /> 
            )  
        }

    	return (
			<Container fluid>
				<Header />

                <EventImage />
                <SearchBar onChange={this.handleOnChange} />
                {eventList}
                
				<Footer />
            </Container>
		);
	}
}

const mapStateToProps = (state) => ({
    list: state.eventList.list,
    loading: state.eventList.loading
})

export default connect(mapStateToProps)(EventLayout);
