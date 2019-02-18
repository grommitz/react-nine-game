import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

class Game extends Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr/>
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    );
  }
}

const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random()*9);
  let stars = [];
  for (let i=0; i<numberOfStars; i++) {
    stars.push(<i key={i} className="fa fa-star"></i>);
  }

  return (
    <div className="col-5">
      {_.range(numberOfStars).map(i => 
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
  )
}

const Button = (props) => {
  return (
    <div className="col-2">
      <button>=</button>
    </div>
  )
}

const Answer = (props) => {
  return (
    <div className="col-5">
      <span>5</span>
      <span>6</span>
    </div>
  )
}

const Numbers = (props) => {
  return (
    <div className="card text-cemter">
      <div>
        {Numbers.list.map((number, i) =>
          <span key={i}>{number}</span>
        )}
      </div>
    </div>
  );
}

Numbers.list = _.range(0, 10);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
