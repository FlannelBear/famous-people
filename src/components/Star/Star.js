import React, {Component} from 'react';

class Star extends Component {
   constructor(){
      super();

      this.state = {star: {name: 'Felcia Day', role: 'The Guild'}}
   }

   handleChangeFor = (prop) => {
      return (event) => {
         this.setState(
            {star: {...this.state.star, [prop]: event.target.value}}
         );
      }
   }

   logStar = () => {
      console.log(this.state.star);
   }

   render(){
      return(
         <div>
            <input type="text" placeholder="Star Name" onChange={this.handleChangeFor('name')}/>
            <input type="text" placeholder="Role" onChange={this.handleChangeFor('role')}/>
            <input type="submit" onClick={this.logStar}/>
           
            <p>{this.state.star.name} is famous for {this.state.star.role}</p>
         </div>
      );
   }
}

export default Star;