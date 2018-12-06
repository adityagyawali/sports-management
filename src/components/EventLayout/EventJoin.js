import React from 'react';
import {Container} from 'semantic-ui-react';

import './EventJoin.css';

class EventJoin extends React.Component {

    
    render (){
        const {detailInfo, cost, notice, guestNum} = this.props.info;

        return (    
            <Container className="evnetJoin">
                <ul>
                    <li>Details: {detailInfo}</li>
                    <li>Guest: We need {guestNum} players today to join the practice.</li>
                    <li>Cost: {cost} e / person </li>
                    <li>Notice: {notice}</li>
                </ul>
                
            </Container>
        );
    }
}

export default EventJoin;