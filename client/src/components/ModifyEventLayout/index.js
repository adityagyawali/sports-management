import React from 'react';
import {Container,Loader} from 'semantic-ui-react';

import Header from "../Header";
import Footer from "../Footer";
import ModifyEventForm from "./ModifyEventForm";

import {getModifyDetail} from '../../actions/modifyEventActions';
import {getSportsCategory, getRegionCategory} from '../../actions/needPlayersActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import {submitModifyEvent} from '../../actions/modifyEventActions';

class ModifyEvent extends React.Component {

    componentDidMount(){  
        if(!this.props.isLogged){
            alert("You need Log in first!!")
            this.props.history.push("/login")
		}else{
            const id = window.location.href.split("/").slice(-1)[0]
            this.props.dispatch(getModifyDetail(id));
			this.props.dispatch(getSportsCategory())
			this.props.dispatch(getRegionCategory())
		}
	}


    handleSubmit = (item) => {
        const eventId = window.location.href.split("/").slice(-1)[0]
        this.props.dispatch(submitModifyEvent( item, eventId, () => { 
            this.props.history.push('/eventDetails/'+ eventId); 
        }));
    }

	render (){
        let modifyEventForm;
        if (this.props.loading){
            modifyEventForm = (
                <Loader active inline='centered' />
            )
        }else{
            modifyEventForm = (
                <ModifyEventForm eventInfo={this.props.eventInfo} onSubmit={this.handleSubmit} 
                    loggedUserId={this.props.loggedUserId} regionCategoryList={this.props.regionCategoryList} 
                    sportCategoryList={this.props.sportCategoryList}
                />
            )
        }

		return (
			<Container fluid>
				<Header />				
				{modifyEventForm}
				<Footer />
			</Container>
		);
	}
}

const mapStateToProps = (state)=> ({
    eventInfo : state.modifyEvent.eventDetail,
    loading: state.modifyEvent.loading,
    error: state.modifyEvent.error,
    isLogged: state.login.isLogged,
	loggedUserId : state.login.userId,
    regionCategoryList: state.needPlayerList.regionCategoryList,
	sportCategoryList: state.needPlayerList.sportCategoryList
})

export default withRouter(connect(mapStateToProps)(ModifyEvent))