import React, { Component } from "react";
// import { Section } from "./Section/Section";
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = opt => {
    this.setState(prevState => ({ [opt]: prevState[opt] + 1 }));
  };

  countTotal = () => {
   return Object.values(this.state).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotal()) * 100);
  };

  render() {
      const Total = this.countTotal()
     const GoodPercent = this.countPositiveFeedbackPercentage();
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>"Please leave feedback"</h1>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h2>Statistics</h2>
        {Total ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={Total}
            positivePercentage={GoodPercent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}


