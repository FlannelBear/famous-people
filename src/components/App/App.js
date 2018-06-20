import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import PersonForm from '../PersonForm/PersonForm';
import People from '../People/People.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {person: {name: '', role: ''}, people: []}
 }

 handleChangeFor = (prop) => {
    return (event) => {
       this.setState(
          {person: {...this.state.person, [prop]: event.target.value}}
       );
    }
 }

 handleSubmit = (event) => {
    this.setState(
       {people: [...this.state.people, this.state.person]}
    );
    this.setState(
       {person: {name: '', role: ''}}
    );
    event.preventDefault();
 }
s
  render() {
    return (
      <div className="App">
        <Header />
        <PersonForm newPerson={this.state.person} submit={this.handleSubmit} change={this.handleChangeFor}/>
        <People peopleList={this.state.people}/>
      </div>
    );
  }
}

export default App;
