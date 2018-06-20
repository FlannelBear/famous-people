import React, {Component} from 'react';

class Star extends Component {
   constructor(){
      super();

      this.state = {star: {name: 'Felcia Day', role: 'The Guild'}, starList: []}
   }

   handleChangeFor = (prop) => {
      return (event) => {
         this.setState(
            {star: {...this.state.star, [prop]: event.target.value}}
         );
      }
   }

   handleSubmit = (event) => {
      this.setState(
         {starList: [...this.state.starList, this.state.star]}
      );
      this.setState(
         {star: {name: '', role: ''}}
      );
      event.preventDefault();
   }

   render(){
      return(
         <div>
            <form onSubmit={this.handleSubmit}>
               <input type="text" placeholder="Star Name" onChange={this.handleChangeFor('name')}/>
               <input type="text" placeholder="Role" onChange={this.handleChangeFor('role')}/>
               <input type="submit" value="Add Star"/>
            </form>
            <h3>List of Famous People</h3>
            <ul>
               {this.state.starList.map(star => 
                  <li key={star.name}>{star.name} is famous for {star.role}</li>
               )}
            </ul>
         </div>
      );
   }
}

export default Star;