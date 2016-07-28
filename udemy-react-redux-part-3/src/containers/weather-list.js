import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/map.js';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273 );

    const { lat, lon } = cityData.city.coord;

    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressue = cityData.list.map(weather => weather.main.pressure);

    return(
      <tr key={name}>

        <td><Map lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color="orange" units="C"></Chart></td>
        <td><Chart data={pressue} color="green" units="hPa"></Chart></td>
        <td><Chart data={humidity} color="blue" units="%"></Chart></td>
      </tr>
    )
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperture (C)</th>
            <th>Pressure (hPa)</th>
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


function mapStateToProps({weather}){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
