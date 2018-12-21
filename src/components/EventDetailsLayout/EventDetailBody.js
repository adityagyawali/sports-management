import React from 'react';
import {Container, Header, Icon} from 'semantic-ui-react';

import './EventDetailBody.css';

class EventDetailBody extends React.Component {

    state ={
        content: this.props.event.description,
        isClicked: false
    }

    onClick=(e)=> {
        const { mobile, email, description} = this.props.event;

        //remove background black
        let detailInfoButtons = document.querySelectorAll(".detailInfoButtonBox");
        for(let i=0; i<detailInfoButtons.length; i++){
            detailInfoButtons[i].classList.remove("clicked");
        }

        let contentTitle = e.target.innerText;
        let contentItem = "";

        if (contentTitle === "More Information"){
            contentItem = description;
        }
        if (contentTitle === "More Information2"){
            contentItem = this.props.moreInfo
        }
        if (contentTitle === "Today Members"){
            contentItem = this.props.member
        }
        if (contentTitle === "Contact"){
            contentItem = "Email : " + email + "Mobile: "+ mobile
        }
        
        this.setState({
            content: contentItem,
            isClicked: true
        })

        e.target.classList.add("clicked");
    }
    
    render(){
        const { description } = this.props.event;
        return (
            <Container className="detailInfoBoxOuter">
                <Header as="h1">
                    <Icon name="comment alternate outline" />
                    <Header.Content>
                        Description
                    </Header.Content>
                </Header>
                <Container className="detailInfoBox">
                    <Container className="detailInfo detailInfoLeft">                        
                        <div className="detailInfoButtonBox clicked" onClick={this.onClick}>More Information</div>
                        <div className="detailInfoButtonBox" onClick={this.onClick}>More Information2</div>
                        <div className="detailInfoButtonBox" onClick={this.onClick}>Today Members</div>
                        <div className="detailInfoButtonBox" onClick={this.onClick}>Contact</div>
                    </Container>
                    
                    <Container className="detailInfo detailInfoRight">
                        {this.state.isClicked ? this.state.content : description }
                    </Container>

                </Container>

            </Container>
        );
    }
}

export default EventDetailBody;