import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

  // method called on submit 
  doChange(e){
    console.log(this.state.Title + " " + this.state.Rating+ " " +this.state.Cover + " " + this.state.review);
    e.preventDefault();

    const bookObject = {
      title : this.state.Title,
      rating: this.state.Rating,
      cover: this.state.Cover,
      review: this.state.Review
    } //sets all the variables 
    axios.post('http://localhost:4000/api/books', bookObject) //uploads to server
    .then()
    .catch();
    this.setState({Title:'',Rating:'', Cover:'', Review:''})
    
  }

 
  render(){
    return (
      <div className="App" >
        <h1>Create a Review</h1>
        <div style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}>  {/*this div is to center the card*/}
          <Card className="card text-white bg-dark mb-3" style={{width:"70%", height:"70%"}}> {/*makes card narrower and dark theme*/}
          <form onSubmit={this.doChange}>
            <Card.Header>Book Title</Card.Header>
            <container style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}> {/*container to center input boxes*/}
              <input 
                style={{width: "500px"}}
                type='text'
                className='form-control'
                value={this.state.Title} //sets this input to be the title
                onChange={this.changeBookTitle} //when submit is pressed this changes the book title
              ></input>
            </container>
            <Card.Header>Rating (Out of 5 Stars)</Card.Header>
            <container style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <input 
                style={{width: "500px"}}
                type='text'
                className='form-control'
                value={this.state.Rating}
                onChange={this.changeBookRating}
              ></input>
            </container>
            <Card.Header>Review</Card.Header>
            <container style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <textarea
                style={{width: "500px"}}
                row='3'
                className='form-control'
                value={this.state.Review}
                onChange={this.changeBookReview} 
                ></textarea>
            </container>
            <Card.Header>Book Cover URL</Card.Header>
            <container style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <textarea
                style={{width: "500px"}}
                row='3'
                className='form-control'
                value={this.state.Cover}
                onChange={this.changeBookCover}
              ></textarea>
            </container>
            <div>
              <br></br>
              {/*Button to submit new review, on click calls method doChange which posts everything to server*/}
              <Button variant="info" type="submit" onClick="doChange"  >
                Create Review
              </Button>
            </div>
          </form>
          <br></br>
        </Card>
      </div>
    </div>
    );
  }
  
}

export default CreateRev;
