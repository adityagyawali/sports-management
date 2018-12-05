import React from 'react';
import {Container} from 'semantic-ui-react';

import './EventDetailBody.css';



class EventDetailButton extends React.Component {
    state = {
        class: this.props.initClass
    }

    onClick=(e)=>{
        this.setState({
            class: "active"
        });

    }

    render(){
        const {item} = this.props;
        return (
            <div className={this.state.class} onClick={this.onClick}>{item}</div>
        );
    }
}

export default EventDetailButton;