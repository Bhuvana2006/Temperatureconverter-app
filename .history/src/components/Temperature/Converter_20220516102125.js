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

export function toCelsius(fahrenheit){
    return(fahrenheit-32) * 5/9
}
export function toFahrenheit(celsius){
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

export function tryConvert(temperature,convert){
    const value = parseFloat(temperature)
    if(Number.isNaN(value)){
        return '';
    }
    return(Math.round(convert(value)*180)/100).toString()
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

function Button ({type,children}){
  const className = 'btn btn-' + type
  return <button className={className}>{children}</button>
}
function PrimaryButton({children}){
    return <button type="primary">{children}</button>
}
function SecondaryButton ({children}){
    return <Button type="secondary">{children}</Button>
}
function colomn2(){
    return <div class="row">
        <div class="col-mmd-6"></div>
        <div class="col-mmd-6"></div>
    </div>
}

export class Calculator extends React.Component {
     constructor(props){
         super(props)
         this.state = {scale:'c',
                       temperature:20}
         //this.handleChange=this.handleChange.bind(this)
         this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
     }
    
    //  handleChange(e){
    //      this.setState({temperature:e.target.value})
    //  }
    handleCelsiusChange(temperature){
        this.setState({ scale:'c', temperature})
    }
    handleFahrenheitChange(temperature){
        this.setState({ scale:'f', temperature})
    }
     
     render(){
         const {temperature,scale} =this.state
         const celsius = scale === 'c'? temperature : tryConvert (temperature,toCelsius)
         const fahrenheit = scale === 'f'? temperature: tryConvert (temperature,toFahrenheit)
         return (
            <div>
                {/* <div className="form-group">
                   <label for="celsius">Temperature (en celsius)</label>
                   <input type="text" id="celsius" value={temperature}className="form-control" onChange={this.handleChange}/>
                </div> */}
                 {/* v declare const{temperture}  after render to convert it to real temp v parse by parsefloat chain of characters */}
                 {/* for this temperatureinput v have to create new class */}
                   <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/> 
                   <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                   <BoilingVerdict celsius = {celsius}/>
                   <Button type="primary">Envoyer</Button>
            </div>
         )
             
     }
}
