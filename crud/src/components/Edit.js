import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:49666/api/Employee' + this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }

  onChange = (e) => {
    const state = this.state.book
    state[e.target.name] = e.target.value;
    this.setState({ book: state });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, description, published_year, publisher } = this.state.book;

    axios.put('http://localhost:49666/api/Employee' + this.props.match.params.id, { isbn, title, author, description, published_year, publisher })
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
            <h4><Link class="btn btn-primary" to={`/'${this.state.book.id}`}><span aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}><br />
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="isbn">ISBN:</label>
                  <input type="text" class="form-control" id="inputEmail4" name="isbn" value={this.state.book.isbn} onChange={this.onChange} placeholder="ISBN" />
                </div>
                <div class="form-group col-md-4">
                  <label for="title">Title:</label>
                  <input type="text" class="form-control" id="inputPassword4" name="title" value={this.state.book.title} onChange={this.onChange} placeholder="Title" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="author">Author:</label>
                  <input type="text" class="form-control" id="inputAddress" name="author" value={this.state.book.author} onChange={this.onChange} placeholder="Author" />
                </div>
                <div class="form-group col-md-4">
                  <label for="description">Description:</label>
                  <input type="text" class="form-control" id="inputAddress2" name="description" value={this.state.book.description} onChange={this.onChange} placeholder="Description" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="published_date">Published Date:</label>
                  <input type="text" class="form-control" id="inputCity" name="published_year" value={this.state.book.published_year} onChange={this.onChange} placeholder="Published Year" />
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