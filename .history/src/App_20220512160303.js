import './App.css';
import React from 'react';
import {BoilingVerdict, Calculator} from './components/Temperature/Converter'

function App() {
  return (
    <div className="App">
     <BoilingVerdict />
     <Calculator />
     
    </div>
  );
}

export default App;
