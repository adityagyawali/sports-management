import React from "react";
import { Container, Loader } from 'semantic-ui-react';

import Header from "../Header";
import Footer from "../Footer";

import EventDetailHead from "./EventDetailHead";
import EventJoin from "./EventJoin";
import EventDetailBody from "./EventDetailBody";

import { getEventDetail, getJoinedPlayers} from '../../actions/eventDetailActions';
import { deleteEvent } from '../../actions/modifyEventActions';
import { modifyMessage, deleteMessage } from '../../actions/joinEventActions';
import { getSportsCategory} from '../../actions/needPlayersActions';

import {connect} from 'react-redux';

class EventDetailsLayout extends React.Component{
    
    componentWillMount(){  
        if(!this.props.isLogged){
            alert("You need Log in first!!")
            this.props.history.push("/login")
        }else{
            this.getRefresh();
        }
    }

    getRefresh = () => {
        const id = window.location.href.split("/").slice(-1)[0]
        this.props.dispatch(getEventDetail(id));
        this.props.dispatch(getJoinedPlayers(id));
        this.props.dispatch(getSportsCategory());
    }

    handleJoinSubmit = () => {
        setTimeout( ()=> {this.getRefresh()}, 3000)
    }
    //event part
    handleModifyEventSubmit = () => { //event modify
        const id =  this.props.eventDetailList._id; // window.location.href.split("/").slice(-1)[0]
        this.props.history.push("/modifyEvent/"+id);
    }
    handleDeleteEventSubmit = () => {
        const id =  this.props.eventDetailList._id; // window.location.href.split("/").slice(-1)[0]
        this.props.dispatch(deleteEvent(id, () => {
            this.props.history.push("/eventList")
        }))
    }

    //message part
    handleModifyMessageSubmit = (item)=> {
        this.props.dispatch(modifyMessage(item))
        setTimeout( ()=> {this.getRefresh()}, 3000)
    }
    handleDeleteMessageSubmit = (id) => {
        this.props.dispatch(deleteMessage(id))
        setTimeout( ()=> {this.getRefresh()}, 3000) 
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
            const {players,category} = this.props.eventDetailList;
            const userName = this.props.loggedUserName.split("@")[0]
            
            eventDetail = (
            <Container >
                <EventDetailHead event={this.props.eventDetailList} joinedPlayerNum={this.props.joinedPlayerList.length} sportCategoryList={this.props.sportCategoryList}/>
                <hr />
                <EventJoin eventId={this.props.eventDetailList._id} 
                    userId={this.props.loggedUserId} 
                    userName={userName} 
                    joinedPlayerList={this.props.joinedPlayerList}
                    players={players}
                    category={category}
                    onSubmit={this.handleJoinSubmit}
                />
                <hr />
                <EventDetailBody event={this.props.eventDetailList} 
                    userId={this.props.loggedUserId}
                    userName={userName}  
                    joinedPlayerList={this.props.joinedPlayerList} 
                    onModifyEvent={this.handleModifyEventSubmit}
                    onDeleteEvent={this.handleDeleteEventSubmit}
                    onModifyMessage={this.handleModifyMessageSubmit}
                    onDeleteMessage= {this.handleDeleteMessageSubmit}
                />
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
    eventDetailList: state.eventDetail.list,
    joinedPlayerList: state.eventDetail.joinedPlayer,
    sportCategoryList: state.needPlayerList.sportCategoryList
})

export default connect(mapStateToProps)(EventDetailsLayout); 