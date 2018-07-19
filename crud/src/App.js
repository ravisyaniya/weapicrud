import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:49666/api/Employee')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      });
  }
  delete(id) {
    console.log(id);
    axios.delete('http://localhost:49666/api/Employee/' + id)
      .then((result) => {
        this.props.history.push("/")
      });
  }


  render() {
    return (

      <div class="container">

        <div class="panel panel-default">

          <div class="panel-heading">
            <center> <h3 class="panel-title">
              <br />BOOK CATALOG
            </h3></center>
          </div>

          <div class="main">

            <h4><Link class="btn btn-primary" to="/create"><span aria-hidden="true"></span> Add Book</Link></h4>
            <table class="table table-hover table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(book =>
                  <tr>
                    <td>{book.isbn}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td><Link to={`/edit/${book.id}`} class="btn btn-success">Edit</Link>|


<Link to={'/'} onClick={this.delete.bind(this, book.id)} class="btn btn-danger">Delete</Link>

                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <footer class="page-footer font-small blue">


          <div class="footer-copyright text-center py-3 panel panel-primary">© 2018 Copyright:
                <a href="https://mdbootstrap.com/bootstrap-tutorial/"> RaviDeveloper.com</a>
          </div>


        </footer>

      </div>
    );
  }
}

export default App;