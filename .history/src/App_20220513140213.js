import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BoilingVerdict, Calculator} from './components/Temperature/Converter'

function App() {
  return (
    <div className="App .bg-primary">
     <BoilingVerdict />
     <Calculator />
     
     {/* <TemperatureInput /> */}
    </div>
  );
}

export default App;
