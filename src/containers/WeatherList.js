import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
    renderWeather = (cityData) =>{
        const name = cityData.city.name
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273)
        //_.map((...), (temp)=> temp -273(TALVEZ))
        const pressure = cityData.list.map(weather => weather.main.pressure)
        const humidity = cityData.list.map(weather => weather.main.humidity)
        const {lon, lat} = cityData.city.coord;

        console.log(temps)
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" unity="°C"/></td>
                <td><Chart data={pressure} color="green" unity="hPA"/></td>
                <td><Chart data={humidity} color="blue" unity="%"/></td>
            </tr>
        )
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°C)</th>
                        <th>Pressure (hPA)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps( { weather } ){
    return { weather }
}

export default connect(mapStateToProps)(WeatherList)
