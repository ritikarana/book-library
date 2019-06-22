import React, { Component } from 'react';
import uuid from 'uuid/v4';
import store from "../store/index";
window.store = store;


class AddBook extends Component {

  
 
    state = {
      name : '',
      author : '',
      description : '',
      count : '',
      editing : ''
  }

 

handleSubmit = (e) => {
e.preventDefault();
 const data = this.state;
 this.props.onAddBook(this.state);
 

 this.setState({
  books: store.getState()["books"],

});

store.subscribe(() => {
  this.setState({
    books: store.getState()["books"],
    
  });
});


 this.setState({
  name : '',
  author : '',
  description : '',
  count : '',
  editing : false
})

}
handleInputChange = e => {
  this.setState({
    [e.target.name]: e.target.value,
    id: uuid,
    editing: false,
  });
};
render() {
return (
<div>
  <h1 className="book_heading">Add Book Details</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" value={this.state.name} name="name" onChange = {this.handleInputChange}  placeholder="Enter Book Name" /><br /><br />
      <input required type="text" value={this.state.author} name="author" onChange = {this.handleInputChange}  placeholder="Enter Author" /><br /><br />
       <input required type="text" value={this.state.count} name="count"  onChange = {this.handleInputChange}  placeholder="Enter Count" /><br /><br />
      <textarea required rows="5" value={this.state.description} name="description"  onChange = {this.handleInputChange}  cols="28" placeholder="Enter Description" /><br /><br />
   <button>Submit</button>
  </form>
</div>
);
}
}

export default AddBook;