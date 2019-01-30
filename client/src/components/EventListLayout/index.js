import React from "react";
import { Container, Loader} from 'semantic-ui-react';

import Header from "../Header";
import Footer from "../Footer";
import EventImage from './EventImage';
import SearchBar from './SearchBar';
import EventList from './EventList';

import {getEventList} from '../../actions/eventListActions';
import { getSportsCategory, getRegionCategory } from "../../actions/needPlayersActions";
import { connect } from 'react-redux';


class EventLayout extends React.Component {
    state = {
        list: [],
        isFiltered: false
    }

	componentDidMount() {
        this.props.dispatch(getEventList());
        this.props.dispatch(getSportsCategory());
        this.props.dispatch(getRegionCategory());
    }
    
    getUniqueSportsCategoryFromEventList = () => {
        const eventList = this.props.list;
        let temp = [];
        eventList.map( (ele, i) => {
            if(!temp.includes(ele.category)){
                temp.push(ele.category)
            }
            return "";
        })
        return temp.sort();
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
    
    getDefaultCategory = () => {
        let tempCategory = window.location.href;
        if ( tempCategory.indexOf("?")){
            tempCategory = window.location.href.split("?")[1]
            return tempCategory;
        }
        return "";
        
    }
    
    render() {
        let eventList;
        const defaultFiltering= this.getDefaultCategory();
        if (this.props.loading || this.props.sportsCategoryLoading){
            eventList = ( 
                <Loader active inline='centered' />
            )
        }else {
           
            eventList = ( 
                <EventList eventList={(this.state.isFiltered ? this.state.list : this.props.list)} sportCategoryList={this.props.sportCategoryList} /> 
            )
        }

    	return (
			<Container fluid>
				<Header />

                <EventImage />
                <SearchBar onChange={this.handleOnChange} defaultFiltering={defaultFiltering} sportCategoryList={this.getUniqueSportsCategoryFromEventList()} regionCategoryList={this.props.regionCategoryList}/>
                {eventList}
                
				<Footer />
            </Container>
		);
	}
}

const mapStateToProps = (state) => ({
    list: state.eventList.list,
    loading: state.eventList.loading,
    sportsCategoryLoading: state.needPlayerList.loading,
    sportCategoryList: state.needPlayerList.sportCategoryList,
    regionCategoryList: state.needPlayerList.regionCategoryList,
})

export default connect(mapStateToProps)(EventLayout);
