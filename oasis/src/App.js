import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Author from './Author';
import Keyword from './Keyword';

 
class App extends React.Component {
  render(){
  return(
    <Router >
      <div>
        <Route exact path="/home" component={Home} />
        <Route path="/home/Author" component={Author} />
        <Route path="/home/Keyword" component={Keyword} />
      </div>
    </Router>
    )
  }
}

export default App;