import React from 'react';
import {Container, Form, Input} from 'semantic-ui-react';

import './SearchBar.css'; 

class SearchBar extends React.Component{
    render(){
        return (
            <Container className="searchBar">
                <Form className="searchForm">
                    
                    <label htmlFor="category">Find </label>
                    <Input name="category" className="searchInput" list='category' placeholder='Choose sports...' />
                        <datalist id='category'>
                            <option value='All' />
                            <option value='Basketball' />
                            <option value='Football' />
                            <option value='Ice Hockey' />
                        </datalist>
                    
                    <label htmlFor="region">In </label>
                    <Input name="region" className="searchInput" list='region' placeholder='Choose region...' />
                        <datalist id='region'>
                            <option value='All' />
                            <option value='Helsinki' />
                            <option value='Espoo' />
                            <option value='Vantaa' />
                        </datalist>
                    
                    <label htmlFor="cost">Cost</label>
                    <Input name="cost" className="searchInput" list='cost' placeholder='Choose cost...' />
                        <datalist id='cost'>
                            <option value='All' />
                            <option value='Free of charge' />
                            <option value='< 5 euro' />
                            <option value='< 10 euro' />
                            <option value='< 20 euro' />
                        </datalist>
                   
                    <label htmlFor="division">Level </label>
                    <Input name="division" className="searchInput" list='division' placeholder='Choose level...' />
                        <datalist id='division'>
                            <option value='ALL' />
                            <option value="Open for anyone" />
                            <option value='Div 4 - 5' />
                            <option value='Div 2 - 3' />
                            <option value='Div 1' />
                        </datalist>

                </Form>
            </Container>
        );
    }
}

export default SearchBar;