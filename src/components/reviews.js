import React from 'react';
import '../App.css';
import Books from './books';
import axios from 'axios';

class Reviews extends React.Component {
  state = {
    books: []};
    //on loading the page gets the books from server
    componentDidMount(){
      axios.get('http://localhost:4000/api/books')
      .then((response)=>{
        //sets the state of books to the ones in server
        this.setState({books: response.data.books})
      })
      .catch((error)=>{
        console.log(error);
      });

    }

   

    render() {
    return (
      <div className="App">
        <h1>Reviews</h1>
        {/*Displays books as in Book.js*/}
        <Books theBooks={this.state.books} ></Books>
        <br></br>
      </div>
      );
    }
  }
  export default Reviews;
  
