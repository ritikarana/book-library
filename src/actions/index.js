
import { ADD_BOOK, DELETE_BOOK,EDIT_BOOK } from './types';




export const addbook = (data) => ({
  type: ADD_BOOK,
  payload: {
 
    data: data
  }
});

export const deletebook = id => ({
  type: DELETE_BOOK,
  payload: {
    id
  }   
});

export const editbook = id => ({
  type: EDIT_BOOK,
  payload: {
    id,
  }   
});

