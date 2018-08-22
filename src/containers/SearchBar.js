import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        term: '',
    }
    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }
    onFormSubmit = (event) =>{
        event.preventDefault();
    }
        render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input value={this.term} 
                onChange={this.onInputChange} 
                className="form-control" 
                placeholder="Get a five-day forecast of your favourite cities"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}