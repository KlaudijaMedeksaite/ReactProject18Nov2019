import React from 'react';
import '../App.css';
import Books from './books';

class Reviews extends React.Component {
  state = {
    books: [
    {
    "Title": "Blue Moon by Lee Child",
    "Rating": "4.5",
    "BookID": "000000001",
    "Type": "book",
    "Cover": "https://www.easons.com/globalassets/books-of-the-month/no-1-bs_blue-moon.png"
    },
    {
    "Title": "THE JOY OF BIG KNICKERS by Kate Garraway",
    "Rating": "2.4",
    "BookID": "000000002",
    "Type": "book",
    "Cover": "https://www.easons.com/globalassets/5637150827/all/books/biography-true-crime/biography/general-biography/97819112744902.jpg"
    },
    {
    "Title": "WILL by Will Self ",
    "Rating": "4.0",
    "BookID": "000000003",
    "Type": "book",
    "Cover": "https://www.easons.com/globalassets/5637150827/all/books/biography-true-crime/biography/general-biography/9780670918614.jpg"
    }]};

    render() {
    return (
    <div className="App">
      <h1>Reviews</h1>
    <Books theBooks={this.state.books}></Books>
    </div>
    );
  }
  }
  export default Reviews;
  
