import React from "react";
import { Container, Loader } from 'semantic-ui-react';

import Header from "../Header";
import Footer from "../Footer";

import EventDetailHead from "./EventDetailHead";
import EventJoin from "./EventJoin";
import EventDetailBody from "./EventDetailBody";

import {connect} from 'react-redux';
import {getEventDetail, getJoinedPlayers} from '../../actions/eventDetailActions';

class EventDetailsLayout extends React.Component{
    componentDidMount(){
        let id = window.location.href.split("/").slice(-1)[0]
        this.props.dispatch(getEventDetail(id));
        this.props.dispatch(getJoinedPlayers(id));
    }

    handleJoinSubmit = () => {
        let id = window.location.href.split("/").slice(-1)[0]
        this.props.dispatch(getEventDetail(id));
        this.props.dispatch(getJoinedPlayers(id));
    }

    render(){
        let eventDetail;
        if (this.props.loading || this.props.joinedPlayerLoading){
            eventDetail = (
                <Container > 
                    <Loader active inline='centered' />
                </Container >
            )
        }else if ( this.props.loading === false && this.props.joinedPlayerLoading === false) {
            const joinedNum = this.props.joinedPlayerList.length 
            const {players} = this.props.list;
            
            eventDetail = (
            <Container >
                <EventDetailHead event={this.props.list} joinedPlayerNum={joinedNum}/>
                <hr />
                <EventJoin eventId={this.props.list._id} userId={"defaultUserId"} onSubmit={this.handleJoinSubmit} joinedPlayerNum={joinedNum} players={players}/>
                <hr />
                <EventDetailBody event={this.props.list} joinedPlayerList={this.props.joinedPlayerList}/>
            </Container>)
        }

        return (
			<Container fluid >
				<Header />
                    {eventDetail}
				<Footer />
            </Container>
        );
    }
}


const mapStateToProps = (state) => ({
    list: state.eventDetail.list,
    joinedPlayerList: state.eventDetail.joinedPlayer,
    loading: state.eventDetail.loading,
    joinedPlayerLoading: state.eventDetail.joinedPlayerLoading
})

export default connect(mapStateToProps)(EventDetailsLayout); 