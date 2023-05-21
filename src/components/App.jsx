import { Component } from "react";


export class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}

        state={{
          good: 0,
          neutral: 0,
          bad: 0
        }}
      >
        <div>

          <h1>Please leave feedback</h1>

          <div>
            <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
          </div>

          <div>
            <ul>
              <li>Good:</li>
              <li>Neutral:</li>
              <li>Bad:</li>
            </ul>
          </div>

        </div>
      </div>
    );
  };
};
