import React from 'react';
import '../App.css';
import Books from './books';
import axios from 'axios';

class Reviews extends React.Component {
  state = {
    books: []};

    componentDidMount(){
      axios.get('http://localhost:4000/api/books')
      .then((response)=>{
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
      <Books theBooks={this.state.books} ></Books>
    </div>
    );
  }
  }
  export default Reviews;
  
