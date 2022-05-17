import React from "react";


const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
}

//   EXAMPLE converter FORMULA 
// Celsius to Fahrenheit Conversion Formula
// Multiply the °C temperature by 1.8. Add 32 to this number. This is the answer in °F.

//  °F = (°C × 9/5) + 32

// It's just as easy to convert Fahrenheit to Celsius;

// °C = (°F − 32) x 5/9


/* 
T(°F) = T(°C)*9/5+32
T(°C) =(T(°F)-32*5/9)
  */ 

function toCelsius(celsius){
    return(fahrenheit-32) * 5/9
}
function toFahrenheit(celsius){
    return(celsius * 9/5) + 32
}


/* when we work on same file with more than one func or class just its enough
to declare the word export same time on app.js we have to import the same func and class name inside curly brace and declare the same name as tags inside div app*/
export function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <div className="alert alert-success"> L'eau bout</div>;
  }
  return <div className="alert alert-info"> L'eau bout pas</div>;
}



export class TemperatureInput extends React.Component{
      constructor(props){
          super(props);
          //this.state = {temperature: ''}
          this.handleChange = this.handleChange.bind(this)
      }
       handleChange(e){
           //this.setState({temperature :e.target.value})
           this.props.onTemperatureChange(e.target.value)
       }

      render(){
          console.log(this.props);
          const {temperature} = this.props //this.state 
          const name = 'scale' + this.props.scale
          const scaleName = scaleNames[this.props.scale]
          return <div className="form-group">
                       <label htmlFor={name}>Temperature(en {scaleName})</label>
                       <input type="text" id={name} value={temperature} className="form-control" onChange={this.handleChange}/>

          </div>
      }
}



export class Calculator extends React.Component {
     constructor(props){
         super(props)
         this.state = {temperature:20}
         //this.handleChange=this.handleChange.bind(this)
     }
    this.handleTemperatureChange=this.handleTemperatureChange.bind(this)
    //  handleChange(e){
    //      this.setState({temperature:e.target.value})
    //  }
    handleTemperatureChange(temperature){
        this.setState({temperature})
    }
     render(){
         const {temperature} =this.state
         const celsius = temperature
         const fahrenheit = toFahrenheit(celsius)
         return (
            <div>
                {/* <div className="form-group">
                   <label for="celsius">Temperature (en celsius)</label>
                   <input type="text" id="celsius" value={temperature}className="form-control" onChange={this.handleChange}/>
                </div> */}
                 {/* v declare const{temperture}  after render to convert it to real temp v parse by parsefloat chain of characters */}
                 {/* for this temperatureinput v have to create new class */}
                   <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleTemperatureChange}/> 
                   <TemperatureInput scale="f" temperature={fahrenheit}/>
                   <BoilingVerdict celsius = {parseFloat(temperature)}/>
            </div>
         )
             
     }
}
