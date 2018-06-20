import React, { Component } from 'react';
import Person from '../Person/Person';

class People extends Component {
   render(){
      return(
         <div>
            <h3>List of Famous People</h3>
               <ul>
                  {this.props.peopleList.map(person => 
                    <Person person={person}/>
                  )}
               </ul>
         </div>
      );
   }
}

export default People;