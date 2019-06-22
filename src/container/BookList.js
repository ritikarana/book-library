import React from 'react';
import { connect } from 'react-redux';
import Allbook from '../components/AllBook';
import { deletePost } from '../actions';

function BookList({ books, onDelete }) {
  if(!books.length) {
    return (
      <div>
        No Books
      </div>
    )
  }
  return (
    <div>

          <Allbook books={ books } />
    
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
  books: state
  }
  }
export default connect(
  mapStateToProps,
  null
)(BookList);