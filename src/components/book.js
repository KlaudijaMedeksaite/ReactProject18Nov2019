import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';

class Book extends React.Component{
    render()
    {
        return(
            <div>
                <Card>
                    <Card.Header>{this.props.book.Title}
                    </Card.Header>
                    <Card.Body>
                        <blockquote>
                        <img src={this.props.book.Cover} width = "250" height = "350"></img>
                        <footer className="blockquote-footer">
                            {this.props.book.Rating}/5 Stars           
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default Book;