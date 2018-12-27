import React from "react";
import { Container, Loader } from 'semantic-ui-react';

import Header from "../Header";
import Footer from "../Footer";

import EventDetailHead from "./EventDetailHead";
import EventDetailBody from "./EventDetailBody";

import {connect} from 'react-redux';
import {getEventDetail} from '../../actions/eventDetailActions';

class EventDetailsLayout extends React.Component{
    componentDidMount(){
        let id = window.location.href.split("/").slice(-1)[0]
        this.props.dispatch(getEventDetail(id));
    }

    render(){
        let propsList;
        if (this.props.loading){
                propsList = (
                <Container > 
                    <Loader active inline='centered' />
                </Container >
            )
        }else{
            propsList = (
            <Container >
                <EventDetailHead event={this.props.list} />
                <hr />
                <EventDetailBody event={this.props.list} />
            </Container>)
        }

        return (
			<Container fluid >
				<Header />
                    {propsList}
				<Footer />
            </Container>
        );
    }
}


const mapStateToProps = (state) => ({
    list: state.eventDetail.list,
    loading: state.eventDetail.loading
})

export default connect(mapStateToProps)(EventDetailsLayout); 