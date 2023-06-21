import React from "react";

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

  const Total = good + neutral + bad;
const options = ["good", "neutral", "bad"]
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / Total) * 100);
  };

  // const Total = countTotal();
  const GoodPercent = countPositiveFeedbackPercentage();
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
        options={options}
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
