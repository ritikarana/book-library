const defaultState = {
    books: [],
    book: {},
    loading: false,
    errors:{}
  }
  
  export default (state=defaultState, action) => {
     
    switch (action.type) {
      case 'FETCH_BOOKS_FULFILLED': {
        console.log(action);
        return {
          ...state,
          books: action.payload.data,
          loading: false,
          errors: {}
        }
      }
  
       case 'FETCH_BOOK':
       {
        return {
          ...state,
          book: action.payload.data
        }
       }
  
      case 'FETCH_BOOKS_REJECTED': {
        console.log("1");
        return {
          ...state,
          loading: false,
          errors: { global: action.payload.message }
        }
      }
  
      case 'SAVE_BOOK': {
        console.log("10");
        return {
          ...state,
          book: action.payload.data
        }
      }

      case 'NEW_BOOK': {
        console.log("2");
        return {
          ...state,
          book: {}
        }
      }
  
      case 'SAVE_BOOK_PENDING': {
        console.log("3");
        return {
          ...state,
          loading: true
        }
      }
  
      case 'SAVE_BOOK_FULFILLED': {
        console.log("4");
        return {
          ...state,
          books: [...state.books, action.payload.data],
          errors: {},
          loading: false
        }
      }
  
      case 'SAVE_BOOK_REJECTED': {
        console.log("5");
        const data = action.payload.response;
        // convert feathers error formatting to match client-side error formatting
        const { book_name, author, description, count } = data.errors;
        const errors = { global:  book_name, author, description, count };
        return {
          ...state,
          errors: errors,
          loading: false
        }
      }
  
      case 'FETCH_BOOK_PENDING': {
        console.log("6");
        return {
          ...state,
          loading: true,
          book: {}
        }
      }
  
      case 'FETCH_BOOK_FULFILLED': {

        console.log("7");
        return {
          ...state,
          book: action.payload.data,
          errors: {},
          loading: false
        }
      }
  
      case 'UPDATE_BOOK_PENDING': {
        console.log("8");
        return {
          ...state,
          loading: true
        }
      }
  
      case 'UPDATE_BOOK_FULFILLED': {

        console.log("9");
        const book = action.payload.data;
        return {
          ...state,
          books: state.books.map(item => item._id === book._id ? book : item),
          errors: {},
          loading: false
        }
      }
  
      case 'UPDATE_BOOK_REJECTED': {
        console.log("10");
        const data = action.payload.response.data;
        const { book_name, author, description, count } = data.errors;
        const errors = { global: data.message, book_name, author, description, count };
        return {
          ...state,
          errors: errors,
          loading: false
        }
      }
  
      case 'DELETE_BOOK_FULFILLED': {
        console.log("11");
        const _id = action.payload.data._id;
        return {
          ...state,
          books: state.books.filter(item => item._id !== _id)
        }
      }
  
      default:
        return state;
    }
  }
  