import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newBook, saveBook, fetchBook, updateBook } from '../actions/book-actions';
import BookForm from '../components/book-form';


class BookFormPage extends Component {

 
    state = {
      redirect: false
    }

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchBook(_id)
    } else {
      this.props.newBook();
    }
  }
  /** if it does not find the book id from props then it will add new book else it will update the book corresponding book id with mapped action functions */

  submit = (book) => {
   
    if(!this.props.book._id) {
     // console.log(book)
    // console.log(this.props.saveBook(book));
      
     return this.props.saveBook(book).then(response => this.setState({ redirect:true }))
      //  .catch(err => {
        //   throw new SubmissionError(this.props.errors)
        // })
    } else {
      return this.props.updateBook(book,book._id)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <BookForm book={this.props.book} loading={this.props.loading} onSubmit={this.submit} />
        }
      </div>
    )
  }
}
/** Make Book  array available in  props and map with components */ 
function mapStateToProps(state) {
  console.log(state)
  return {
    book: state.bookStore.book,
    errors: state.bookStore.errors
  }
}
/** Map connection with actions and component  */
export default connect(mapStateToProps, {newBook, saveBook, fetchBook, updateBook})(BookFormPage);
