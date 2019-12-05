import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class EditRev extends React.Component {
  constructor(props){
    super(props);

    this.state = {Title:'',
                  Rating:'',
                  Cover:'',
                  Review:'',
                  _id: ''};

    //calling set methods
    this.doChange = this.doChange.bind(this);
    this.changeBookTitle = this.changeBookTitle.bind(this);
    this.changeBookCover = this.changeBookCover.bind(this);
    this.changeBookRating = this.changeBookRating.bind(this);
    this.changeBookReview = this.changeBookReview.bind(this);
  }
  componentDidMount(){
    //once the component loads up this method displays what the current values are so you know what to change
    axios.get('http://localhost:4000/api/books/' + this.props.match.params.id)
    .then((response)=>{
        this.setState({
            _id:response.data._id,
            Title:response.data.title,
            Rating:response.data.rating,
            Cover:response.data.cover,
            Review:response.data.review
        })
    })
    .catch();
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
    console.log(this.state.Title + " " + this.state.Rating+ " " +this.state.Cover + " " + this.state.Review);

    const bookObject = {
      title : this.state.Title,
      rating: this.state.Rating,
      cover: this.state.Cover,
      review: this.state.Review
    }
    axios.put('http://localhost:4000/api/books/' + this.state._id, bookObject )
    .then()
    .catch();

    // redirects back to page with reviews
    this.props.history.push('/reviews')  
    window.location.reload(); // refreshes the reviews window as without this for some reason the editted value doesn't update

  }
  render(){
    return (
      <div style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}> {/*this div is to center the card*/}
        <Card className="card text-white bg-dark mb-3" style={{width:"70%", height:"70%"}}> {/*makes card narrower and dark theme*/}
        <br></br>

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
              <Button variant="info" type="submit" onClick="doChange">
                Change Review
              </Button>
            </div>
          </form>
          <br></br>
        </Card>
      </div>
    )
  }
}

export default EditRev;
