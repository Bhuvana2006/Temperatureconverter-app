import './App.css';
import React from 'react';
import {BoilingVerdict, Calculator,toCelsius,toFarenheit} from './components/Temperature/Converter'

function App() {
  return (
    <div className="App">
     <BoilingVerdict />
     <Calculator />
     <toCelsius />
     <toFarenheit />
     {/* <TemperatureInput /> */}
    </div>
  );
}

export default App;
