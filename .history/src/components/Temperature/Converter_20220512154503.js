import React from "react";

/* when we work on same file with more than one func or class just its enough
to declare the word export same time on app.js we have to import the same func and class name inside curly brace and declare the same name as tags inside div app*/
export function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <div className="alert alert-success"> L'eau bout</div>;
  }
  return <div className="alert alert-info"> L'eau bout pas</div>;
}


export class Calculator extends React.Component {
     constructor(props){
         super(props)
         this.state = {temperature:''}
         this.handleChange=this.handleChange.bind(this)
     }
     handleChange(e){
         this.setState({temperature:e.target.value})
     }
     render(){
         const {temperature} =this.state
         return (
            <div>
                <div className="form-group"></div>
                <label htmlFor="celsius">Temperature (en celsius)</label>
                <input type="text" id="celsius" value={temperature}className="form-control" ocChange={this.handleChange/>
            </div>
            <BoilingVerdict celsius = {parseFloat(temperature)}/>
         
         )
             
     }
}
