import React from 'react';
import {Container, Form, Button, Dropdown, Icon} from 'semantic-ui-react';

import './SearchBar.css'; 

class SearchBar extends React.Component{

    state = {
        category: "",
        region: "",
        cost: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        let filteringInfo = {
            category: (this.state.category).length > 0 ? this.state.category : "ALL",
            region: (this.state.region).length > 0 ? this.state.region : "ALL",
            cost: this.state.cost > 0 ? this.state.cost : (this.state.cost === 0 ? 0 : "ALL")
        }
        console.log(filteringInfo)
        this.props.onChange(filteringInfo);
    }

    handleChange = (e, { value, name }) => this.setState({ [name]: value })
    handleSearchChange = (e, { name, searchQuery }) => this.setState({ [name]: searchQuery })
    
    getCategoryOptions = (categoryList) => {
		let tempOptions = categoryList.map( ( ele, index) => {
			return ({ key: index, text: ele, value: ele});
		})

		tempOptions.splice(0,0, {key: tempOptions.length, text: "ALL", value: "ALL"})
		return tempOptions; 
	}

	getRegionOptions = (categoryList) => {
		let tempOptions = categoryList.map( ( ele, index) => {
			return ({ key: index, text: ele.region, value: ele.region});
		})

		tempOptions.splice(0,0, {key: tempOptions.length, text: "ALL", value: "ALL"})
		return tempOptions; 
    }
    
    getCostOptions = () => {
        let tempOptions = []
        for(let i=0; i<11; i=i+5){
            if(i=== 0 )tempOptions.push ({ key: i, text: "Free", value: i})
            else tempOptions.push ({ key: i, text: "Less than "+i+" eruo", value: i})
        }
        tempOptions.splice(0,0, {key: tempOptions.length, text: "ALL", value: "ALL"})
        return tempOptions;
    }
    
    render(){
        const {sportCategoryList,regionCategoryList } = this.props;
		const sportsCategoryOptions = this.getCategoryOptions(sportCategoryList);
		const regionCategoryOptions = this.getRegionOptions(regionCategoryList);
        const costCategoryOptions = this.getCostOptions();
        

        return (
            <Container className="searchBar">
                <Form className="searchForm" onSubmit={this.onSubmit}>

                    <Dropdown 
                        name="category"
                        className="searchInput"
                        clearable selection search
                        autoComplete="true"
                        options={sportsCategoryOptions}
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
                        options={regionCategoryOptions}
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
                        options={costCategoryOptions}
                        onChange={this.handleChange}
                        onSearchChange={this.handleSearchChange}
                        value={this.state.cost}
                        placeholder="The cost" 
                    />  
                   
                    <Button color="blue" type="submit" className="searchButton"> <Icon name='search'/></Button>
                </Form>
            </Container>
        );
    }
}

export default SearchBar;