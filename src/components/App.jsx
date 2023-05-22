import React from "react";
import { Component } from "react";
import { ButtonList } from "./Buttons/buttons";
import { StatisticsList } from "./Statistics/statistics";



export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
/*   onLeaveFeedback = e => {

  }

  countTotalFeedback = e => {
    
  } */

  render() {

    const { good, neutral, bad } = this.state;


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
      >
        <div>
          <>
            <h3>Please leave feedback</h3>
            <ButtonList
              good={good}
              neutral={neutral}
              bad={bad} />
          </>

          <>
          <h3>Statistics</h3>     
          <StatisticsList/>
          </>

        </div>
      </div>
    );
  };
};
