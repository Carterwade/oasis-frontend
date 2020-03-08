import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import journal from './journal.jpg';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
        }

        this.handleSearch=this.handleSearch.bind(this);
    }

    handleSearch(keywods){
        this.setState({
            text:keywods
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

                    
                    
                    <Link to="/home/author/" style={{color:'black'}}>
                        <div>
                            <button type="button">
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