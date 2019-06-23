import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
  const errors = {name:{}};
  if(!values.book_name) {
    errors.book_name = {
      message: 'You need to enter Name'
    }
  }
  if(!values.count) {
    errors.count = {
      message: 'You need to enter a number'
    }
  } 
  if(!values.author) {
    errors.author = {
      message: 'You need to enter an Author'
    }
  }

  if(!values.description) {
    errors.description = {
      message: 'You need to enter an Description'
    }
  }
  
  return errors;
}

class BookForm extends Component {

    

  componentWillReceiveProps = (nextProps) => { // Load book Asynchronously
    const { book } = nextProps;
    if(book._id !== this.props.book._id) { // Initialize form only once
      this.props.initialize(book)
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    console.log(this.props)
    const { handleSubmit, pristine, submitting, loading, book } = this.props;
   
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{book._id ? 'Edit Book' : 'Add New Book'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
           
              <Field name="book_name" type="text" component={this.renderField} label="Name"/>
              <Field name="author" type="text" component={this.renderField} label="Author"/>
    
            <Field name="description" type="text" component={this.renderField} label="Description"/>
            <Field name="count" type="text" component={this.renderField} label="Count"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'book', validate})(BookForm);
