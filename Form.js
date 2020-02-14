import React, {Component} from 'react'

class App extends Component{
  constructor(){
    super()

    this.state = {
      firstName:"",
      lastName:"",
      gender:"",
      destination:"",
      breakfast:false,
      lunch:false,
      dinner:false,

    }
    this.handleChange = this.handleChange.bind(this)
    
  }
  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ?
    this.setState({
      [name]:checked
    })
    :
    this.setState({
      [name]: value
    })
  }
  render(){
    return(
      <div>
        <form>
          First Name: 
          <input 
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}

          /> <br/>
          Last Name: 
          <input 
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          /> <br/>
          <p>Gender</p>
          <input 
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
          /> Male
          <input 
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
          /> Female <br />
          <p>Destination</p>
          <select
          name="destination"
          onChange={this.handleChange}
          >
            <option>-- Please Select Destination --</option>
            <option value="karachi">Karachi</option>
            <option value="islamabad">Islamabad</option>
            <option value="lahore">Lahore</option>
          </select> <br />

          <p>Please Select Type of meal</p>
          Break Fast: <input 
          type="checkbox"
          name="breakfast"
          checked={this.state.breakfast}
          onChange={this.handleChange}

          /> <br />
          Lunch: <input 
          type="checkbox"
          name="lunch"
          checked={this.state.lunch}
          onChange={this.handleChange}

          /> <br />
          Dinner: <input 
          type="checkbox"
          name="dinner"
          checked={this.state.dinner}
          onChange={this.handleChange}

          /> <br />
          


        </form>
          <p>-----------------------------</p>
          <p>First Name: {this.state.firstName}</p>
          <p>Last Name: {this.state.lastName}</p>
          <p>You are : {this.state.gender}</p>
          <p>Destination : {this.state.destination}</p>
          <p>Type of Meal</p>
          <p>BreakFast : {this.state.breakfast ? "YES" : "NO"}</p>
          <p>Lunch : {this.state.lunch ? "YES" : "NO"}</p>
          <p>Dinner : {this.state.dinner ? "YES" : "NO"}</p>
        
      </div>
    );
  }
}

export default App
