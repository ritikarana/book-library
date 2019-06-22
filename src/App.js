import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddBook from './container/Addbook';
import BookList from './container/BookList';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="book-container">
         
       <div className="left-row"><AddBook /></div> 
        <div className="left-row"><BookList /></div> 
        </div>
      </div>
    );
  }
}

export default App;
