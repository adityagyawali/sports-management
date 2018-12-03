import React from 'react';
import {Container, Form, Input, Button, Dropdown} from 'semantic-ui-react';

import './SearchBar.css'; 

class SearchBar extends React.Component{
    
    state = {
        category: "",
        region: "",
        cost:"",
        division:""
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onChange(this.state);
    }
    
    render(){

        const countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'BASKET BALL' } ]
        return (
            <Container className="searchBar">
                <Form className="searchForm" onSubmit={this.onSubmit}>

                <label htmlFor="category">Find </label>
                <Dropdown name="category" onChange={this.handleOnChange} placeholder='Choose sports...' search selection options={countryOptions} />



                    
                    <label htmlFor="region">In </label>
                    <Input onChange={this.handleOnChange} value={this.state.region} name="region" className="searchInput" list='region' placeholder='Choose region...' />
                        <datalist id='region'>
                            <option value='All' />
                            <option value='Helsinki' />
                            <option value='Espoo' />
                            <option value='Vantaa' />
                        </datalist>
                    
                    <label htmlFor="cost">Cost</label>
                    <Input onChange={this.handleOnChange} value={this.state.cost} name="cost" className="searchInput" list='cost' placeholder='Choose cost...' />
                        <datalist id='cost'>
                            <option value='All' />
                            <option value='Free of charge' />
                            <option value='< 5 euro' />
                            <option value='< 10 euro' />
                            <option value='< 20 euro' />
                        </datalist>
                   
                    <Button color="blue" type="submit">Find! </Button>
                </Form>
            </Container>
        );
    }
}

export default SearchBar;