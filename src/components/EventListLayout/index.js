import React from "react";
import { Container} from 'semantic-ui-react';
import { connect } from 'react-redux';

import Header from "../Header";
import Footer from "../Footer";
import EventImage from './EventImage';
import SearchBar from './SearchBar';
import EventList from './EventList';

class EventLayout extends React.Component {
    static defaultProps = {
        list: [
            { category: "Default BALL", title:"This is demo data: Default props",  date: 'Mon, 30 Nov', region: "Default", address: "Kaj Franckin katu 4", amPm: "pm", hour:7, minute:30, players: 5,  joinedPlayers: 3, duration: 2, cost: 0, mobile: "0466298287", email:"airwoong@hotamil.com"   },
            { category: "BASKET BALL", title:"Just for fun, come and play",  date: 'Mon, 30 Nov', region: "Helsinki", address: "Kaj Franckin katu 4", amPm: "pm", hour:7, minute:30, players: 5,  joinedPlayers: 3, duration: 2, cost: 0, mobile: "0466298287", email:"airwoong@hotamil.com"   },
            { category: "FLOOR BALL", title:"We need more players for the league", date: 'Sat, 01 Dec', region: "Espoo", address: "Kaj Franckin katu 4", amPm: "pm", hour:7, minute:30, players: 3,  joinedPlayers: 3, duration: 2, cost: 3, mobile: "0466298287", email:"airwoong@hotamil.com"  },
            { category: "BADMINTONL", title:"Booked place but nobody coming", date: 'Sat, 01 Dec', region: "Helsinki", address: "Kaj Franckin katu 4", amPm: "pm", hour:7, minute:30, players: 3,  joinedPlayers: 1, duration: 2, cost: 1 , mobile: "0466298287", email:"airwoong@hotamil.com"  },
            { category: "FOOT BALL", title:"Hey, We want to friendly match as team",date: 'Sun, 02 Dec', region: "Vantaa", address: "Kaj Franckin katu 4", amPm: "pm", hour:7, minute:30, players: "Team", joinedPlayers: "Wanted",  cost: 10 , duration: 2, mobile: "0466298287", email:"airwoong@hotamil.com" },
            { category: "BASKET BALL", title:"It's open for everybody", date: 'Mon, 03 Dec', region: "Espoo", address: "Kaj Franckin katu 4", amPm: "pm", hour:7, minute:30, players: 5,  joinedPlayers: 4, duration: 2,  cost: 0 , mobile: "0466298287", email:"airwoong@hotamil.com"},
            { category: "FLOOR BALL", title:"Just come and play for fun", date: 'Mon, 03 Dec', region: "Vantaa", address: "Kaj Franckin katu 4", amPm: "pm", hour:7, minute:30, players: 5,  joinedPlayers: 2, duration: 2,  cost: 3 , mobile: "0466298287", email:"airwoong@hotamil.com" },
            { category: "FOOT BALL", title:"We need practice as team", date: 'Tue, 04 Dec', region: "Espoo", address: "Kaj Franckin katu 4", amPm: "pm", hour:7, minute:30, players: "Team",  joinedPlayers: "Team", duration: 2,  cost: 1 , mobile: "0466298287", email:"airwoong@hotamil.com" },
            { category: "FOOT BALL", title:"Just for fun, come and play", date: 'Tue, 04 Dec', region: "Helsinki", address: "Kaj Franckin katu 4", amPm: "pm", hour:7, minute:30, players: 8, joinedPlayers: 3, duration: 2,  cost: 10 , mobile: "0466298287", email:"airwoong@hotamil.com"},
        ]
    }

    state = {
        list: this.props.list
    }

    handleOnChange = ( filteringInfo )=>{
        const allList = this.props.list;
        let { category, cost, region } = filteringInfo;
        let categoryFiltered, regionFiltered, costFiltered;

        if (category !== "ALL"){
            categoryFiltered = allList.filter( element => (
                element.category === category
            ));
        }else categoryFiltered = allList;

        if (region !== "ALL"){
            regionFiltered =  categoryFiltered.filter(element =>(
                element.region === region
            ));
        }else regionFiltered = categoryFiltered;

        if (cost !== "ALL"){
            costFiltered =  regionFiltered.filter(element =>(
                element.cost <= cost 
            ));
        }else costFiltered = regionFiltered;

        this.setState({
            list : costFiltered
        });
    }
        
    render() { 
		return (
			<Container fluid >
				<Header />
                <Container fluid style={{minHeight: "100rem"}}>
                    <EventImage />
                    <SearchBar onChange={this.handleOnChange} />
                    <EventList eventList={this.state.list} />
                </Container>
				<Footer />
            </Container>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        list: state.eventList.list
    }
};

export default connect(mapStateToProps)(EventLayout);
