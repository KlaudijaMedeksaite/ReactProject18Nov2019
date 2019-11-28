import React from 'react';
import '../App.css';
import axios from 'axios';

class CreateRev extends React.Component {
  constructor(props){
    super(props);

    this.state = {Title:'',
                  Rating:'',
                  Cover:'',
                  Review:''};

    //calling set methods
    this.doChange = this.doChange.bind(this);
    this.changeBookTitle = this.changeBookTitle.bind(this);
    this.changeBookCover = this.changeBookCover.bind(this);
    this.changeBookRating = this.changeBookRating.bind(this);
    this.changeBookReview = this.changeBookReview.bind(this);
  }

  //methods setting title, cover pic and rating for book
  changeBookTitle(e){
    this.setState({Title: e.target.value});
  }
  changeBookCover(e){
    this.setState({Cover: e.target.value});
  }
  changeBookRating(e){
    this.setState({Rating: e.target.value});
  }
  changeBookReview(e){
    this.setState({Review: e.target.value});
  }

  doChange(e){
    console.log(this.state.Title + " " + this.state.Rating+ " " +this.state.Cover + " " + this.state.review);
    e.preventDefault();

    const bookObject = {
      title : this.state.Title,
      rating: this.state.Rating,
      cover: this.state.Cover,
      review: this.state.Review
    }
    axios.post('http://localhost:4000/api/books', bookObject)
    .then()
    .catch();
    this.setState({Title:'',Rating:'', Cover:'', Review:''})
    
  }

 
  render(){
    return (
      <div className="App">
        <h1>Create a Review</h1>
      <form onSubmit={this.doChange}>
        <div className = "createRev-form">
          <h4>Book Title</h4>
          <input 
            type='text'
            className='form-control'
            value={this.state.Title}
            onChange={this.changeBookTitle}
          ></input>
        </div>
        <div>
          <h4>Rating (Out of 5 Stars)</h4>
          <input 
            type='text'
            className='form-control'
            value={this.state.Rating}
            onChange={this.changeBookRating}
          ></input>
        </div>
        <div>
          <h4>Review</h4>
          <textarea
            row='3'
            className='form-control'
            value={this.state.Review}
            onChange={this.changeBookReview} 
            ></textarea>
        </div>
        <div>
          <h4>Book Cover URL</h4>
         <textarea
            row='3'
            className='form-control'
            value={this.state.Cover}
            onChange={this.changeBookCover}
          ></textarea>
        </div>

        <div>
          <br></br>
          <input
          type="submit"
          value="Add Review"
          >
          </input>
        </div>

      </form>
    </div>
    );
  }
  
}

export default CreateRev;
