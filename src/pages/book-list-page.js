import React, { Component} from 'react';
import { connect } from 'react-redux';
import BookList from '../components/book-list';
import { fetchBooks, deleteBook } from '../actions/book-actions';

class BookListPage extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <div>
        <h1>List of Books</h1>
        <BookList books={this.props.books} loading={this.props.loading} errors={this.props.errors} deleteBook={this.props.deleteBook}/>
      </div>
    )
  }
}

// Make Books  array available in  props
function mapStateToProps(state) {
  return {
      books : state.bookStore.books,
      loading: state.bookStore.loading,
      errors: state.bookStore.errors
  }
}

export default connect(mapStateToProps, {fetchBooks, deleteBook})(BookListPage);
