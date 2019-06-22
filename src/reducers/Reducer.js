import { ADD_BOOK, DELETE_BOOK,EDIT_BOOK,UPDATE } from '../actions/types';
const Reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_BOOK:
    //  console.log("ritika")
    //console.log(action.payload.data)
      return  state.concat([action.payload.data]);

    case DELETE_BOOK:
      return state.filter((book)=>book.id !== action.id);
    case EDIT_BOOK:
      console.log(action);
      return state.map((book)=>book.id === action.id ? {...book,editing:!book.editing}:book)
    case UPDATE:
      return state.map((book)=>{
        if(book.id === action.id) {
          return {
             ...book,

             name:action.data.name,
             author:action.data.author,
             description:action.data.description,
             count:action.data.count,
             editing: !book.editing
          }
        } else return book;
      })
    default:
      return state;
  }
}
export default Reducer;