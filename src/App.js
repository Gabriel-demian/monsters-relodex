import React, { Component } from 'react';
import { CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: []
    };
  }

  // we take the data from the url that give us some users and we update our state array.
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }))
  }
//`
  render(){
    return(
      <div className="App">
        <CardList monsters={this.state.monsters}/>
      </div>
    )
  }
}

export default App;
