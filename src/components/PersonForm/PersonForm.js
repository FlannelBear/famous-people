import React, {Component} from 'react';

class PersonForm extends Component {

   render(){
      return(
         <div>
            <form onSubmit={this.props.submit}>
               <input type="text" placeholder="Star Name" onChange={this.props.change('name')} value={this.props.newPerson.name}/>
               <input type="text" placeholder="Role" onChange={this.props.change('role')} value={this.props.newPerson.role}/>
               <input type="submit" value="Add Star"/>
            </form>
            <p>Person: {this.props.newPerson.name} is famous for {this.props.newPerson.role}</p>
         </div>
      );
   }
}

export default PersonForm;