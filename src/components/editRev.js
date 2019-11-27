import React from 'react';
import axios from 'axios';

class EditRev extends React.Component {
  constructor(props){
    super(props);

    this.state = {Title:'',
                  Rating:'',
                  Cover:''};

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
    axios.post('http://localhost:4000/api/books', bookObject)
    .then()
    .catch();
    this.setState({Title:'',Rating:'', Cover:''})
    
  }
  render(){
    return (
      <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input 
                        type='text'
                        className='form-control'
                        value={this.state.Title}
                        onChange={this.changeBookTitle}>
                        </input>
                    </div>
                    <div>
                        <label>Movie Year</label>
                        <input 
                        type='text'
                        className='form-control'
                        value={this.state.Year}
                        onChange={this.handleMovieYearChange}>
                        </input>
                    </div>
                    <div>
                        <label>Movie Poster URL</label>
                    <textarea
                        row='3'
                        className='form-control'
                        value={this.state.Poster}
                        onChange={this.handleMoviePosterChange}>
                        </textarea>
                    </div>

                    <div>
                        <input
                        type="submit"
                        value="Change">
                        </input>
                    </div>
                </form>
            </div>
      
    );
  }
  
}

export default EditRev;
