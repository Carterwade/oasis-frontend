import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import journal from './journal.jpg';
 
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
        }

        this.handleSearch=this.handleSearch.bind(this);
    }

    handleSearch(keywods){
        this.setState({
            filterText:keywods
        });
    }

    render(){
        return (
            <div className="home">
                <header className="home-header">
                    <img src={journal} alt=""/>          
                    <p>
                        ScholarExplorer
                    </p>     
                    <p>  
                        <input />
                    </p>    
                     
                    <Link to="/home/author/" style={{color:'black'}}>
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