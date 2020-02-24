import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [

{
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
},
{
  title: 'Reactfds',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 1,
},

{
  title: 'Reactssd',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 2,
},
];


const WeatherRow = function(props) {
  return (
    <tr className="weather-row">
      <td>{props.name}</td>
      {props.temperature.map(e => <td>{`${e} C`}</td>)}
    </tr>
  );
};

class ExplainBindingsComponent extends Component {
  constructor() {
    super();

    this.onClickMe = this.onClickMe.bind(this);
  }

  onClickMe() {
    console.log(this);
  }

  render() {
    return (
      <button
        onClick={this.onClickMe}
        type="button"
      >
        Click Me
      </button>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list,
    };

    this.onDismissBindings = {};

    this.state.list.forEach((e) => {
      this.onDismissBindings[e.objectID] = 
        () => this.onDismiss(e.objectID);
      }
    );
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item =>
      item.objectID !== id
    );

    this.setState({
      list: updatedList,
    });
  }

  render() {
    return (
      <div className="App">
        <ExplainBindingsComponent />
        {this.state.list.map((item, index) =>
          <div key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={this.onDismissBindings[item.objectID]}
                type="button"
              > Dismiss
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}


export default App;
