import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


class Book extends React.Component{
    constructor(){
        super();

        this.deleteBook = this.deleteBook.bind(this);
    }
    deleteBook(e)
    {
        console.log("Delete Clicked");
        axios.delete("http://localhost:4000/api/books/" + this.props.book._id)
        .then()
        .catch();
    }
    render()
    {
        return(
            <div>
                <Card>
                    <Card.Header>{this.props.book.title}
                    </Card.Header>
                    <Card.Body>
                        <blockquote>
                        <img src={this.props.book.cover} width = "250" height = "350"></img>
                        <footer className="blockquote-footer">
                            {this.props.book.rating}/5 Stars           
                        </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.deleteBook}>Delete</Button>
                    <Link to={"/editRev/" + this.props.book._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        )
    }
}
export default Book;