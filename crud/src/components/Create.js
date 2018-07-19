import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      isbn: '',
      title: '',
      author: '',
      description: '',
      published_year: '',
      publisher: '',
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, description, published_year, publisher } = this.state;

    axios.post('http://localhost:49666/api/Employee', { isbn, title, author, description, published_year, publisher })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { isbn, title, author, description, published_year, publisher } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <center> <h3 class="panel-title">
              <br />  ADD BOOK DETAILS
            </h3></center>
          </div>
          <div class="main">
            <h4><Link Class="btn btn-primary" to="/"><span aria-hidden="true"></span> Book List</Link></h4><br />
            <form onSubmit={this.onSubmit}>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="isbn">ISBN:</label>
                  <input type="text" class="form-control" id="inputEmail4" name="isbn" value={isbn} onChange={this.onChange} placeholder="ISBN" />
                </div>
                <div class="form-group col-md-4">
                  <label for="title">Title:</label>
                  <input type="text" class="form-control" id="inputPassword4" name="title" value={title} onChange={this.onChange} placeholder="Title" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="author">Author:</label>
                  <input type="text" class="form-control" id="inputAddress" name="author" value={author} onChange={this.onChange} placeholder="Author" />
                </div>
                <div class="form-group col-md-4">
                  <label for="description">Description:</label>
                  <input type="text" class="form-control" id="inputAddress2" name="description" onChange={this.onChange} placeholder="Description" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="published_date">Published Date:</label>
                  <DatePicker className="form-control"


                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="publisher">Publisher:</label>
                  <input type="text" class="form-control" name="publisher" value={publisher} onChange={this.onChange} placeholder="Publisher" />
                </div>

              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;