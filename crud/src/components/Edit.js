import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {},
      startDate: moment()

    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:49666/api/Employee/' + this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  onChange = (e) => {
    const state = this.state.book
    state[e.target.name] = e.target.value;
    this.setState({ book: state });
  }


  onSubmit = (e) => {
    e.preventDefault();

    const { id, isbn, title, author, description, published_year, publisher } = this.state.book;
    console.log("value", this.state.book);

    axios.put('http://localhost:49666/api/Employee/' + this.props.match.params.id, { id, isbn, title, author, description, published_year, publisher })
      .then((result) => {
        this.props.history.push("/" + this.props.match.params.id)
      });
  }

  render() {

    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <center>  <h3 class="panel-title">
              <br /> EDIT BOOK DETAILS
            </h3></center>
          </div>
          <div class="main">
            {/* <h4><Link class="btn btn-primary" to={`/'${this.state.book1}`}><span aria-hidden="true"></span> book1 List</Link></h4> */}
            <form onSubmit={this.onSubmit}><br />
              <div class="form-row">
                {/* <div class="form-group col-md-4">
                  <label for="id">ID</label>
                  <input type="text" class="form-control"  name="id" value={this.state.book.id} onChange={this.onChange} placeholder="ID" />
                </div> */}
                <div class="form-group col-md-4">
                  <label for="isbn">ISBN:</label>
                  <input type="text" class="form-control" name="isbn" value={this.state.book.isbn} onChange={this.onChange} placeholder="ISBN" />
                </div>
                <div class="form-group col-md-4">
                  <label for="title">Title:</label>
                  <input type="text" class="form-control" name="title" value={this.state.book.title} onChange={this.onChange} placeholder="Title" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="author">Author:</label>
                  <input type="text" class="form-control" name="author" value={this.state.book.author} onChange={this.onChange} placeholder="Author" />
                </div>
                <div class="form-group col-md-4">
                  <label for="description">Description:</label>
                  <input type="text" class="form-control" name="description" value={this.state.book.description} onChange={this.onChange} placeholder="Description" />
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
                  <input type="text" class="form-control" name="publisher" value={this.state.book.publisher} onChange={this.onChange} placeholder="Publisher" />
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

export default Edit;