import React, {Component} from 'react';
import './App.css';
import Start from './components/start';
import Reviews from './components/reviews';
import EditRev from './components/editRev';
import CreateRev from './components/createRev.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//npm install --save react-router-dom
import {Switch, Route, BrowserRouter} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/reviews">Reviews</Nav.Link>
              <Nav.Link href="/createReview">Create Review</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Start}/>
            <Route path="/reviews" component={Reviews}/>
            <Route path="/createReview" component={CreateRev}/>
            <Route path="/editRev/:id" component={EditRev}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
