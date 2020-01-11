import React from 'react'
import WeatherForecast from './WeatherForecast'
import '../assets/style.css'

export default class WeatherSearchForm extends React.Component {

  state = {
    city: '',
    searchForecast: false
  }

  handleCityChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmitCity = (e) => {
    e.preventDefault()
    this.setState({
      searchForecast: true
    })
  }
  
  render() {
    return (
      <div>
        {/* search bar */}
        <form onSubmit={this.handleSubmitCity}>
          <input 
            type="text"
            name="city"
            placeholder="search by the name of the city"
            value={this.state.city}
            onChange={this.handleCityChange}
          />
          <button onClick={this.handleSubmitCity}>search</button>
        </form>
        {/* display weather api */}
        {
          this.state.searchForecast ? 
          <WeatherForecast city={this.state.city} /> : null
        }
      </div>
    )
  }
}
