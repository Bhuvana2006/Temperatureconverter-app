import './App.css';
import React from 'react';
import Converter from './components/Temperature/Converter'
import Test from "./components/Temperature/test";
function App() {
  return (
    <div className="App">
     <Converter />
     <Test />
    </div>
  );
}

export default App;
