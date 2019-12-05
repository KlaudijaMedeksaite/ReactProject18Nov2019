import React from 'react';
import Book from './book';

class Books extends React.Component
{
    render()
    {
        return this.props.theBooks.map((book)=>{
            return <Book key={book._id} book={book}></Book> //gets book by the ID and displays it
        });
    }
}

export default Books;