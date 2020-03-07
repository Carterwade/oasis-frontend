import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Paper from './Paper';

 
class App extends React.Component {
  render(){
  return(
    <Router >
      <div>
        <Route exact path="/home" component={Home} />
        <Route path="/home/paper" component={Paper} />

      </div>
    </Router>
    )
  }
}

export default App;