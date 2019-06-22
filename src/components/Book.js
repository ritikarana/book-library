import React, { Component } from 'react';
import { connect } from 'react-redux';
class Book extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      author: this.props.book.author,
      description: this.props.book.description,
      count: this.props.book.count,
      name: this.props.book.name,
      id: this.props.book.id
    }
  }
render() {
return (
<div className="book">
  <p className="book_name"><label>Book Name</label> :{this.state.name}</p>
  <p className="book_author"><label>Author Name</label> : {this.state.author}</p>
  <p className="book_description"><label>Description</label> : {this.state.description}</p>
  <p className="book_count"><label>Count</label> : {this.state.count}</p>

  <div className="control-buttons">
    <button className="edit"
    onClick={() => this.props.edit({ type: 'EDIT_BOOK', id: this.state.id })
    }
    >Edit</button>
    <button className="delete"
    onClick={() => this.props.dispatch({ type: 'DELETE_BOOK', id: this.state.id })}
    >Delete</button>
  </div>
</div>
);
}
}


export default connect()(Book);