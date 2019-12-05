import React from 'react';
import '../App.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

class Start extends React.Component {
  render(){

    return (
      <div className="App" >
        <h1> How to write a review?</h1>
        
        <div style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}> {/*this div is to center the card*/}
          <Card className="card text-white bg-dark mb-3" style={{width:"50%"}}> {/*makes card narrower and dark theme*/}
            <div style={{marginLeft:50}} align="left"> {/*align the steps left with offset of 50px*/}
              <Card.Body>
                <br></br>
                <b>Step 1:</b> Read a book.<br></br>
                <b>Step 2:</b> Read it again, but this time more critically.<br></br>
                <b>Step 3:</b> Click on Create Review tab at the top.<br></br>
                <b>Step 4:</b> Fill out what is asked and submit your review.<br></br>
                <b>Step 5:</b> Click on Reviews tab at the top and find your review at the bottom of the page. <br></br>
                <b>Step 6:</b> Click the edit button under your review if you need to change anything or delete if you no longer want the review to be on this page.<br></br><br></br>
              </Card.Body>
            </div>
          </Card>
        </div>
      </div>
    );
  }
  
}

export default Start;
