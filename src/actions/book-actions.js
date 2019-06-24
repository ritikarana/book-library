
import axios from "axios";
import {backendurl}  from './index';
const url = '/books'
const BASE_URL = "http://localhost:8080";


/** WITH THE HELP OF AXIOS MODULE  IT WILL RETURN THE DATA FROM BACKEND SERVER 
 * Please note to run the folder under src folder Please run the "node server" on your command prompt 
  */

  /** It will return all the books while starting the app */

  

  export function fetchBooks(){
    console.log("ZXZ");
    return dispatch => {
      dispatch({
        type: 'FETCH_BOOKS',
        payload: backendurl.get(url)
      })
    }
  }

 /** While add new book page and in store it will return empty state */

export function newBook() {
  return dispatch => {
    dispatch({
      type: 'NEW_BOOK'
    })
  }
}

 /** Save book and in store it will return added book state */

export function saveBook(book) {
 // console.log(book);
  return dispatch => {

    axios.post(BASE_URL+'/books/add',book)
        .then(function (response) {
        // console.log(response);
          dispatch({
              type: 'SAVE_BOOK',
              payload: response
      
            })
        })
        .catch(function (error) {
          console.log("error",error);
          dispatch({
              type: 'SAVE_BOOK_REJECTED',
              payload: error
            })
        });
    

      
  }


}

 /**View book based on requested ID */

export function fetchBook(_id) {
  return dispatch => {
      axios.get(BASE_URL+'/books/viewbook/'+_id)
          .then(function (response) {
           console.log('API RESPONSE' + response);
            dispatch({
                type: 'FETCH_BOOK',
                payload: response
        
              })
          })
          .catch(function (error) {
            console.log("error",error);
            dispatch({
                type: 'FETCH_BOOK_PENDING',
                payload: error
              })
          });  
    }
  
}

 /** Return updated book state based on requested edit id */

export function updateBook(book,_id) {
console.log(book);
console.log(_id);
  return dispatch => {
    axios.post(BASE_URL+'/books/update/'+_id,book)
        .then(function (response) {
         console.log('API RESPONSE' + response);
          dispatch({
              type: 'UPDATE_BOOK',
              payload: response
      
            })
        })
        .catch(function (error) {
          console.log("error",error);
          dispatch({
              type: 'UPDATE_BOOK_REJECTED',
              payload: error
            })
        });
    

      
  }
}

/** Delete requested book id */

export function deleteBook(_id) {

  
  return dispatch => {


    axios.get(BASE_URL+'/books/delete/'+_id)
        .then(function (response) {
      //   console.log('API RESPONSE' + response);
          dispatch({
              type: 'DELETE_BOOK',
              payload: response
      
            })
        })
        .catch(function (error) {
          console.log("error",error);
          dispatch({
              type: 'UPDATE_BOOK_REJECTED',
              payload: error
            })
        });
    

      
  }


}
