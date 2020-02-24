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
];

const temperature = {
  "moscow": [0, -2, 3, 2, 4, 3, 2],
  "saint-peterburg": [2, 4, 3, 2, 1, 5, 6],
  "kazan": [2, 4, 6, 7, 8, 8, 6]
};

const WeatherRow = function(props) {
  return (
    <tr className="weather-row">
      <td>{props.name}</td>
      {props.temperature.map(e => <td>{`${e} C`}</td>)}
    </tr>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: list,
    };
  }

  render() {
    return (
      <div>
        <div className="weather">
          {Object.keys(temperature).map(e =>
            <WeatherRow
              name={e}
              temperature={temperature[e]}/>)
          }
        </div>
        <div className="App">
          {this.state.list.map(item =>
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}


export default App;
