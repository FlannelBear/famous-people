import React, { Component } from 'react';

class Person extends Component{
   render(){
      return(
         <li key={this.props.person.name}>{this.props.person.name} is famous for {this.props.person.role}</li>
      );
   }
}

export default Person;