import React from "react";

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
     }
     render(){
         return (
             <div>

             </div>
         )
     }
}
