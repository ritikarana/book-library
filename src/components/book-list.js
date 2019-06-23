import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import BookCard from './book-card';

export default function BookList({books, loading, errors, deleteBook}){

  const loadingMessage = (
      <Message icon info>
        <Icon name='circle notched' loading />
        <Message.Content>
           <Message.Header>Just one second</Message.Header>
           We are fetching that content for you.
       </Message.Content>
      </Message>
    )

    const emptyMessage = (
      <Message icon info>
        <Icon name='warning circle' />
        <Message.Content>
           <Message.Header>No Books Found</Message.Header>
           <p>Add some new Books to get started.</p>
           <Link to={'/book/new'} className="ui button primary">Add New Contact</Link>
       </Message.Content>
      </Message>
    )

    const timeoutMessage = (
      <Message icon negative>
        <Icon name='wait' />
        <Message.Content>
           <Message.Header>{errors.global}</Message.Header>
           Is the backend server running?
       </Message.Content>
      </Message>
    )

  const cards = () => {
    return books.map(book => {
      return (
        <BookCard key={book._id} book={book} deleteBook={deleteBook} />
      )
    })
  }

  const bookList = (
    <Card.Group>
      { cards() }
    </Card.Group>
  )

  return (
    <div>
      { loading && loadingMessage }
      { books.length === 0 && !loading  && !errors.global && emptyMessage }
      { errors.global && timeoutMessage }
      { books.length > 0 && bookList }
    </div>
  )
}
