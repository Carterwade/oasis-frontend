import React from 'react';
import './App.css';
import journal from './journal.jpg';
import './searchScholar.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={journal} alt=""/>
      
        <p>
          ScholarExplorer
        </p> 

        <p>  
         <input id="Scholar"/>
        </p>
        
        <button type="button" onclick="searchScholar()">
          Search
        </button>
      </header>
    </div>
  );
}

export default App;
