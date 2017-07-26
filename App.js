import React, { Component } from 'react';
import Myreact from "./Components/Myreact";
import './App.css';
import AddUsers from './Components/AddUsers'

class App extends Component {

  constructor (){
    super();
    this.state ={
      users: [{
  "id": 1,
  "first_name": "Kasper",
  "last_name": "Underdown",
  "email": "kunderdown0@lulu.com",
  "gender": "Male",
 
}, {
  "id": 2,
  "first_name": "Goldi",
  "last_name": "Caddy",
  "email": "gcaddy1@aboutads.info",
  "gender": "Female",

}, {
  "id": 3,
  "first_name": "Belva",
  "last_name": "Rickersey",
  "email": "brickersey2@nytimes.com",
  "gender": "Female",

}, {
  "id": 4,
  "first_name": "Clementina",
  "last_name": "Broseman",
  "email": "cbroseman3@sphinn.com",
  "gender": "Female",
  
}]
    }
  }
  handleData(user){
    let usersk = this.state.users;
    usersk.push(user);
    this.setState({users:usersk});
    console.log(user);
  }
  render() {
    return (
      <div className="App">
       <AddUsers AddUser={this.handleData.bind(this)}/>
       <Myreact users={this.state.users}/>
      </div>
    );
  }
}

export default App;
