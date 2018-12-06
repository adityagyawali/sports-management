import React from "react";
import { Container} from 'semantic-ui-react';

import Header from "../Header";
import Footer from "../Footer";
import EventImage from './EventImage';
import SearchBar from './SearchBar';
import EventList from './EventList';

class EventLayout extends React.Component {
    static defaultProps = {
        list: [
            { id:1, title:"Just for fun, come and play", category: "BASKET BALL", date: 'Mon, 30 Nov', players: 5,  joinedPlayers: 3, time: '17:00', address: "Kaj Franckin katu 4", region: "Helsinki", cost: "FREE" },
            { id:2, title:"We need more players for the league", category: "FLOOR BALL",date: 'Sat, 01 Dec', players: 3,  joinedPlayers: 3, time: '09:00', address: "Kaj Franckin katu 4", region: "Helsinki",  cost: "3 euro" },
            { id:3, title:"Booked place but nobody coming", category: "BADMINTON",date: 'Sat, 01 Dec', players: 3,  joinedPlayers: 1, time: '20:30', address: "Kaj Franckin katu 4", region: "Espoo",  cost: "1 euro" },
            { id:4, title:"Hey, We want to friendly match as team", category: "FOOT BALL",date: 'Sun, 02 Dec', players: "Team", joinedPlayers: "Wanted", time: '19:00', address: "Kaj Franckin katu 4", region: "Vantaa",  cost: "10 euro/month" },
            { id:5, title:"It's open for everybody", category: "BASKET BALL",date: 'Mon, 03 Dec', players: 5,  joinedPlayers: 4, time: '17:00', address: "Kaj Franckin katu 4", region: "Helsinki",  cost: "FREE" },
            { id:6, title:"Just come and play for fun", category: "FLOOR BALL",date: 'Mon, 03 Dec', players: 5,  joinedPlayers: 2, time: '09:00', address: "Kaj Franckin katu 4", region: "Espoo",  cost: "3 euro" },
            { id:7, title:"We need practice as team", category: "FOOT BALL",date: 'Tue, 04 Dec', players: "Team",  joinedPlayers: "Team", time: '20:30', address: "Kaj Franckin katu 4", region: "Espoo",  cost: "1 euro" },
            { id:8,  title:"Just for fun, come and play", category: "FOOT BALL",date: 'Tue, 04 Dec', players: 8, joinedPlayers: 3, time: '19:00', address: "Kaj Franckin katu 4", region: "Helsinki",  cost: "10 euro/month" },
        ]
    }

    state = {
        list: this.props.list
    }

    handleOnChange = ( filteringInfo )=>{
        const allList = this.props.list;
        let filteredList = allList.filter ( event => (
            event.category === filteringInfo.category
        ));
        this.setState({
            list: filteredList
        });
    }
        
    render() { 
		return (
			<Container fluid >
				<Header />
                <Container fluid style={{height: "100rem"}}>
                    <EventImage />
                    <SearchBar onChange={this.handleOnChange} />
                    <EventList eventList={this.state.list} />
                </Container>
				<Footer />
            </Container>
		);
	}
}

export default EventLayout;
