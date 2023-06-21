// import React, { Component } from "react";
import { render } from '@testing-library/react';
import { useState } from 'react';
// import { Section } from "./Section/Section";
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export  const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = opt => {
    switch (opt) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotal = () => {
    return Object.values(this.state).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotal()) * 100);
  };

  const Total = countTotal();
  const GoodPercent = countPositiveFeedbackPercentage();
  render(
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
        onLeaveFeedback={onLeaveFeedback}
      />
      <h2>Statistics</h2>
      {Total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={Total}
          positivePercentage={GoodPercent}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
