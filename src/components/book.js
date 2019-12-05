import React from 'react';
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
        window.location.reload(); // refreshes window to show only existing reviews

    }
    render()
    {
        return(
            <div style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}> {/*this div is to center the card*/}
                <Card className="card text-white bg-dark mb-3" style={{width:"80%"}}> {/*makes card narrower and dark theme*/}
                    <Card.Header>{this.props.book.title}
                    </Card.Header>
                    <Card.Body>
                        <blockquote>
                        <img src={this.props.book.cover} width = "250" height = "350"></img>
                        </blockquote>
                    </Card.Body>
                    <Card.Text>                            
                        {this.props.book.review}
                        <footer className="blockquote-footer">
                            {this.props.book.rating}/5 Stars           
                        </footer>
                    </Card.Text>
                    <div >
                        {/*Buttons to delete and edit the review*/}
                        <Button variant="outline-success" onClick={this.deleteBook}>Delete</Button>
                        <Link to={"/editRev/" + this.props.book._id} className="btn btn-outline-info">Edit</Link>
                    </div>
                </Card>
                <br></br>
            </div>
        )
    }
}
export default Book;