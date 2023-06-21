import React from "react";
import PropTypes from 'prop-types';  
import {StatisticP } from "./Statistics.styled"
 
export const Statistics = ({
  good,
  neutral,
  bad,
total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatisticP>
        Good: <span>{good}</span>
      </StatisticP>
      <StatisticP>
        Neutral: <span>{neutral}</span>
      </StatisticP>
      <StatisticP>
        Bad: <span>{bad}</span>
      </StatisticP>
      <StatisticP>
        Total:  <span> {total} </span>
      </StatisticP>
      <StatisticP>
        Positive Feedback:
        <span> {positivePercentage}%</span>
      </StatisticP>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};