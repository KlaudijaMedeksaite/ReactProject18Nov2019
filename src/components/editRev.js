import React from 'react';
import axios from 'axios';

class EditRev extends React.Component {
  constructor(props){
    super(props);

    this.state = {Title:'',
                  Rating:'',
                  Cover:'',
                  _id: ''};

    //calling set methods
    this.doChange = this.doChange.bind(this);
    this.changeBookTitle = this.changeBookTitle.bind(this);
    this.changeBookCover = this.changeBookCover.bind(this);
    this.changeBookRating = this.changeBookRating.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:4000/api/books/' + this.props.match.params.id)
    .then((response)=>{
        this.setState({
            _id:response.data._id,
            Title:response.data.title,
            Rating:response.data.rating,
            Cover:response.data.cover
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

  doChange(e){
    console.log(this.state.Title + " " + this.state.Rating+ " " +this.state.Cover);
    e.preventDefault();

    const bookObject = {
      title : this.state.Title,
      rating: this.state.Rating,
      cover: this.state.Cover
    }
    axios.put('http://localhost:4000/api/books/' + this.state._id, bookObject )
    .then()
    .catch();
  }
  render(){
    return (
      <div>
      <form onSubmit={this.doChange}>
        <h4>Book Title</h4>
          <div>
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
            <h4>Book Cover URL</h4>
            <textarea
              row='3'
              className='form-control'
              value={this.state.Cover}
              onChange={this.changeBookCover}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Change">
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default EditRev;
