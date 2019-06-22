import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import store from "../store/index";
import EditComponent from './EditComponent';
window.store = store;
class AllBook extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      books: {}
    }
  }

  componentDidMount() {

   
    //return false;
    this.setState({
      books: store.getState(),

    });

    store.subscribe(() => {
      this.setState({
        books: store.getState(),
        
      });
    });
  }
  handleChange = event => {
    this.setState({
      books: store.getState(),

    });

    store.subscribe(() => {
      this.setState({
        books: store.getState(),
        
      });
    });
    console.log("Search----------" + event.target.value);
    //return false;
   // console.log(this.state);
    //return false;
    var updatedList = this.state.books;
    updatedList = updatedList.filter(function(book) {
      return (
        book.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });

    this.setState({ books: updatedList });
    console.log(this.state.books)
  };

render() {
return (
<div>
  <h1 className="post_heading">All Books</h1>
  <div className="searchbar"><input type="text" className="search-bar" onChange={this.handleChange}  placeholder="Search" /></div>
    

  <div>

  {this.props.books.map((book) => (
  <div key={book.id}>
    {book.editing ?
    <EditComponent book={book} key={book.id} />
    : <Book book={book}
    key={book.id} />}
  </div>
)
)} </div>
    

</div>
);
}
}


export default AllBook;