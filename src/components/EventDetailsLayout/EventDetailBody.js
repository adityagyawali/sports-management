import React from 'react';
import {Container, Header, Icon} from 'semantic-ui-react';

import './EventDetailBody.css';

class EventDetailBody extends React.Component {
    static defaultProps = {
        who : "We are EUKKO (Espoon Ukko Koris)",
        mobile:"010-00000",
        mail: "airwoong83@gmail.com",
        moreInfo:"We usually practice on every Thursday !",
        contact: "Next game is on Thursday 14th Dec !",
        member: "3 / 10"
    } 

    state ={
        content: this.props.who,
        initClass: "detailInfoButtonBox" 
    }

    onClick=(e)=>{

        let detailInfoButtons = document.querySelectorAll(".detailInfoButtonBox");
        for(let i=0; i<detailInfoButtons.length; i++){
            detailInfoButtons[i].classList.remove("clicked");
        }

        let contentTitle = e.target.innerText;
        let contentItem = "";
        if (contentTitle === "Who We Are"){
            contentItem = this.props.who
        }
        if (contentTitle === "More Information"){
            contentItem = this.props.moreInfo
        }
        if (contentTitle === "Today Members"){
            contentItem = this.props.member
        }
        if (contentTitle === "Contact"){
            contentItem = this.props.mail + <br/> + this.props.mobile
        }
        
        this.setState({
            content: contentItem
        });

        e.target.classList.add("clicked");
    }
    



    render(){

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
                        <div className="detailInfoButtonBox clicked" onClick={this.onClick}>Who We Are</div>
                        <div className="detailInfoButtonBox" onClick={this.onClick}>More Information</div>
                        <div className="detailInfoButtonBox" onClick={this.onClick}>Today Members</div>
                        <div className="detailInfoButtonBox" onClick={this.onClick}>Contact</div>
                    </Container>
                    
                    <Container className="detailInfo detailInfoRight">
                        {this.state.content}
                    </Container>

                </Container>

            </Container>
        );
    }
}

export default EventDetailBody;