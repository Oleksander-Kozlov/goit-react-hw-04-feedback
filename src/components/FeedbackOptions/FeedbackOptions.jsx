import React from "react"
import PropTypes from 'prop-types';  
import { FeedbackDiv, Button } from './FeedbackOptions.styled';


export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  
  return (
    <FeedbackDiv>
      {options.map(opt => <Button key={opt}
        onClick={()=>onLeaveFeedback(opt)}  >{opt}</Button>)}
      {/* <Button name="good" onClick={() => onLeaveFeedback(options['good'])}>
        Good
      </Button>
      <Button
        name="neutral"
        onClick={() => onLeaveFeedback(options['neutral'])}
      >
        Neutral
      </Button>
      <Button name="bad" onClick={() => onLeaveFeedback(options['bad'])}>
        Bad
      </Button> */}
    </FeedbackDiv>
  );
};


FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
};