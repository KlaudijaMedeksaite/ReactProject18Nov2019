import React from 'react';
import Book from './book';

class Books extends React.Component
{
    render()
    {
        return this.props.theBooks.map((book)=>{
            return <Book key={book.cover} book={book}></Book>
        });
    }
}

export default Books;