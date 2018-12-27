import React from 'react';
import {Container, Form, Button, Dropdown, Icon} from 'semantic-ui-react';

import './SearchBar.css'; 

class SearchBar extends React.Component{
    
    static defaultProps = {
        categoryOptions : [
            { key: 1, text: 'ALL', value: 'ALL' },
            { key: 2, text: 'BASKET BALL', value: 'BASKET BALL' },
            { key: 3, text: 'FOOT BALL', value: 'FOOT BALL' },
            { key: 4, text: 'BADMINTON', value: 'BADMINTON' },
            { key: 5, text: 'ICE HOCKEY', value: 'ICE HOCKEY' },
        ],
        regionOptions : [
            { key: 1, text: 'ALL', value: 'ALL' },
            { key: 2, text: 'Helsinki', value: 'Helsinki' },
            { key: 3, text: 'Espoo', value: 'Espoo' },
            { key: 4, text: 'Vantaa', value: 'Vantaa' },
        ],
        costOptions : [
            { key: 1, text: 'ALL', value: 'ALL' },
            { key: 2, text: 'Free', value: 0.5 },
            { key: 3, text: 'Less than 5 euro', value: 5 },
            { key: 4, text: 'Less than 10 euro', value: 10 },
        ],

    }


    state = {
        category: "",
        region: "",
        cost:""
    }

    onSubmit = (e) => {
        e.preventDefault();
        let filteringInfo = {
            category: this.state.category.length > 0 ? this.state.category : "ALL",
            region: this.state.region.length > 0 ? this.state.region : "ALL",
            cost: this.state.cost > 0 ? this.state.cost : "ALL"
        }
        this.props.onChange(filteringInfo);
    }

    handleChange = (e, { value, name }) => this.setState({ [name]: value })
    handleSearchChange = (e, { name, searchQuery }) => this.setState({ [name]: searchQuery })

    render(){
        const {categoryOptions, regionOptions, costOptions } = this.props;
        return (
            <Container className="searchBar">
                <Form className="searchForm" onSubmit={this.onSubmit}>

                    <Dropdown 
                        name="category"
                        className="searchInput"
                        clearable selection search
                        autoComplete="true"
                        options={categoryOptions}
                        onChange={this.handleChange}
                        onSearchChange={this.handleSearchChange}
                        value={this.state.category}
                        placeholder="What Sports ..." 
                    />
                
                    <Dropdown 
                        name="region"
                        className="searchInput"
                        clearable selection search
                        autoComplete="true"
                        options={regionOptions}
                        onChange={this.handleChange}
                        onSearchChange={this.handleSearchChange}
                        value={this.state.region}
                        placeholder="Where ..." 
                        />                             

                    <Dropdown 
                        name="cost"
                        className="searchInput"
                        clearable selection search
                        autoComplete="true"
                        options={costOptions}
                        onChange={this.handleChange}
                        onSearchChange={this.handleSearchChange}
                        value={this.state.cost}
                        placeholder="The cost" 
                    />  
                   
                    <Button color="blue" type="submit" className="searchButton"> <Icon name='search'  /></Button>
                </Form>
            </Container>
        );
    }
}

export default SearchBar;