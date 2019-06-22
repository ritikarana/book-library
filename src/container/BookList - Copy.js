import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { editbook,deletebook } from '../actions';

class BookList extends React.Component {

  constructor(props)
  {
    super(props);
    console.log(this.props)
  }

  render(){ 
    
    if(!books.length) {
    return (
      <div>
        No Books
      </div>
    )
  }
  else {
    return (
      <div>
        {books.map(book => {
          return (
            <Book book={ book } delete_data={ delete_data } edit_book = {edit_book} key={ book.id } />
          );
        })}
      </div>
    );
  }

}


}


const mapStateToProps = state => {
  return {
    books: this.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete_data: id => {
      dispatch(deletebook(id));
    },
    edit_book: id => {
      dispatch(editbook(id));
    },
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);