import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
    renderWeather = (cityData) =>{
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp)
        //_.map((...), (temp)=> temp -273(TALVEZ))
        const pressure = cityData.list.map(weather => weather.main.pressure)
        const humidity = cityData.list.map(weather => weather.main.humidity)

        console.log(temps)
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" unity="K"/></td>
                <td><Chart data={pressure} color="green" unity="hPA"/></td>
                <td><Chart data={humidity} color="black" unity="%"/></td>
            </tr>
        )
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
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
