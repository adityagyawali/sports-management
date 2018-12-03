import React from 'react';
import {Container, Table } from 'semantic-ui-react';

import './EventList.css';
import Event from './Event';


class EventList extends React.Component {   

    render(){

        const {eventList} = this.props;
        let tableBodyList = eventList.map( event => {
            return (<Event key={event.id} event={event}/>);
        });
        
    
        return (
            <Container>
                <h1>All the sports waiting for you !</h1>
                <Table sortable celled className="eventList">
                <Table.Header>
                    <Table.Row> 
                        <Table.HeaderCell rowSpan="2">
                            TITLE
                        </Table.HeaderCell>    
                        <Table.HeaderCell>
                            DATE
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            PLAYERS
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            TIME
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            ADDRESS
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            COST
                        </Table.HeaderCell>                                
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {tableBodyList}
                </Table.Body>
                </Table>
            </Container>
        );
    }
}

export default EventList;