import React from "react";
import { Container, Loader } from 'semantic-ui-react';

import Header from "../Header";
import Footer from "../Footer";

import EventDetailHead from "./EventDetailHead";
import EventJoin from "./EventJoin";
import EventDetailBody from "./EventDetailBody";

import {connect} from 'react-redux';
import {getEventDetail, getJoinedPlayers} from '../../actions/eventDetailActions';
import { getSportsCategory} from '../../actions/needPlayersActions';

class EventDetailsLayout extends React.Component{
    
    componentDidMount(){  
        if(!this.props.isLogged){
            alert("You need Log in first!!")
            this.props.history.push("/login")
        }else{
            
            const id = window.location.href.split("/").slice(-1)[0]
            this.props.dispatch(getEventDetail(id));
            this.props.dispatch(getJoinedPlayers(id));
            this.props.dispatch(getSportsCategory());
        }
    }

    handleJoinSubmit = () => {
        const id = window.location.href.split("/").slice(-1)[0]
        this.props.dispatch(getEventDetail(id));
        this.props.dispatch(getJoinedPlayers(id));
    }

    handleModifySubmit = () => {
        const id = window.location.href.split("/").slice(-1)[0]
        this.props.history.push("/modifyEvent/"+id);
    }

    render(){
        
        let eventDetail;
        if (this.props.eventDetailloading || this.props.joinedPlayerLoading || this.props.sportsCategoryLoading){
            eventDetail = (
                <Container > 
                    <Loader active inline='centered' />
                </Container >
            )
        }else if ( this.props.eventDetailloading === false && this.props.joinedPlayerLoading === false && this.props.sportsCategoryLoading === false) {
            const joinedNum = this.props.joinedPlayerList.length 
            const {players} = this.props.eventDetaillist;
            const userName = this.props.loggedUserName.split("@")[0]
            
            eventDetail = (
            <Container >
                <EventDetailHead event={this.props.eventDetaillist} joinedPlayerNum={joinedNum} userName={userName} sportCategoryList={this.props.sportCategoryList}/>
                <hr />
                <EventJoin eventId={this.props.eventDetaillist._id} userId={this.props.loggedUserId} userName={userName} onSubmit={this.handleJoinSubmit} joinedPlayerNum={joinedNum} players={players}/>
                <hr />
                <EventDetailBody event={this.props.eventDetaillist} loggedUserId={this.props.loggedUserId} joinedPlayerList={this.props.joinedPlayerList} onModify={this.handleModifySubmit}/>
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
    isLogged: state.login.isLogged,
    loggedUserId : state.login.userId,
    loggedUserName: state.login.userName,
    eventDetailloading: state.eventDetail.loading,
    joinedPlayerLoading: state.eventDetail.joinedPlayerLoading,
    sportsCategoryLoading: state.needPlayerList.loading,
    eventDetaillist: state.eventDetail.list,
    joinedPlayerList: state.eventDetail.joinedPlayer,
    sportCategoryList: state.needPlayerList.sportCategoryList
})

export default connect(mapStateToProps)(EventDetailsLayout); 