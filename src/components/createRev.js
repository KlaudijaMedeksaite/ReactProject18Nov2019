import React from 'react';
import '../App.css';

class CreateRev extends React.Component {
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
    alert(this.status.Title + "      " + this.status.Rating + "       " + this.status.Cover);
    e.preventDefault();
    this.setState({Title:'',Rating:'', Cover:''})
  }

 
  render(){
    return (
      <div className="App">
      <form onSubmit={this.doChange}>
        <div>
          <label>Book Title</label>
          <input 
            type='text'
            className='form-control'
            value={this.state.Title}
            onChange={this.changeBookTitle}
          ></input>
        </div>
        <div>
          <label>Rating </label>
          <input 
            type='text'
            className='form-control'
            value={this.state.Rating}
            onChange={this.changeBookRating}
          ></input>
        </div>
        <div>
          <label>Book Cover URL</label>
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
