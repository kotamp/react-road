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
  title: 'styled-components',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 1,
},

{
  title: 'redux',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 2,
},

{
  title: 'underscore.js',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 3,
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

// function isSearched(searchTerm) {
//   return function (item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   };
// }

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list,
      searchTerm: ''
    };

    this.onDismissBindings = {};

    // this.state.list.forEach((e) => {
    //   this.onDismissBindings[e.objectID] =
    //     () => this.onDismiss(e.objectID);
    //   }
    // );

    this.state.list.forEach(function(e) {
      this.onDismissBindings[e.objectID] = this.onDismiss.bind(this, e.objectID);
    }, this);

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    // console.log(event);
    // console.log(Object.prototype.toString.call(event))
    this.setState({ searchTerm: event.target.value });
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
        <form>
          <input
            type="text"
            onChange={this.onSearchChange}
          />
        </form>
        <ExplainBindingsComponent />
        {this.state.list.filter(isSearched(this.state.searchTerm)).map((item, index) =>
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
