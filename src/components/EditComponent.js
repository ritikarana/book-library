import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';


class EditComponent extends Component {

    constructor(props)
    {
        console.log(props)
        super(props)
        this.state = {
            name : this.props.book.name,
            author : this.props.book.author,
            description : this.props.book.description,
            count: this.props.book.count,
            id:this.props.book.id,
            editing: ''

        }
        console.log(this.state);
    }
    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    
handleEdit = (e) => {
  e.preventDefault();

 this.setState({editing:false,id:uuid})
  
  this.props.dispatch({ type: 'UPDATE', id: this.props.book.id, data: this.state })
}
render() {
return (
<div key={this.props.book.id} className="book">
  <form className="form" onSubmit={this.handleEdit}>
  <input required type="text" name="name" defaultValue={this.state.name} onChange={ this.handleInputChange } placeholder="Enter Book Name" />
   <br /><br />
<input required name="author" defaultValue={this.state.author} type="text" onChange={ this.handleInputChange } placeholder="Enter Author" /><br /><br />
  <input required name="count" defaultValue={this.state.count} type="text" onChange={ this.handleInputChange } placeholder="Enter Count" /><br /><br />
<textarea name="description" defaultValue={this.state.description} required onChange={ this.handleInputChange } rows="5"  cols="28" placeholder="Enter Description" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}


export default connect()(EditComponent);