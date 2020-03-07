import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import journal from './journal.jpg';
 
class Home extends React.Component{
    render(){
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
                     
                    <Link to="/home/paper/" style={{color:'black'}}>
                        <div>
                            <button type="button" onclick="searchScholar()">
                                Search
                            </button>
                        </div>     
                    </Link>  
                </header>
            </div>
        );
    }
}
 
export default Home;