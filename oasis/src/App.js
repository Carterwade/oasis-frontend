import React from 'react';
import './App.css';
import './searchScholar.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          ScholarExplorer
        </p> 
        <p>  
         <input id="Scholar">

         </input>
        </p>
        <button type="button" onclick="searchScholar()">
          Search
        </button>
      </header>
    </div>
  );
}

export default App;
