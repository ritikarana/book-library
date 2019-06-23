import { backendurl } from './index1';
import axios from "axios";

const url = '/books';
const BASE_URL = "http://localhost:8080";

export function fetchBooks(){
  console.log("ZXZ");
  return dispatch => {
    dispatch({
      type: 'FETCH_BOOKS',
      payload: backendurl.get(url)
    })
  }
}

export function newBook() {
  return dispatch => {
    dispatch({
      type: 'NEW_BOOK'
    })
  }
}

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

export function deleteBook(_id) {

  
  return dispatch => {


    axios.get(BASE_URL+'/books/delete/'+_id)
        .then(function (response) {
         console.log('API RESPONSE' + response);
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
