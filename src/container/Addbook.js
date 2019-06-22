import { connect } from 'react-redux';
import { addbook } from '../actions';
import Addbook from '../components/AddBook';

const mapDispatchToProps = dispatch => {
  return {
    onAddBook: data => {
      dispatch(addbook(data));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Addbook);