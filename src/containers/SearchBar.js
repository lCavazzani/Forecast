import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
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
        this.props.fetchWeather(this.state.term)
        this.setState({
            term: ''
        })
    }
        render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input value={this.state.term} 
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

function mapDispatchToProps(dispatch){
    return bindActionCreators( { fetchWeather }, dispatch )
}

export default connect(null, mapDispatchToProps)(SearchBar)