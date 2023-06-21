// import React from "react"
// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
// import { Statistics } from "components/Statistics/Statistics";
// import { Notification } from "components/Notification/Notification";
// import PropTypes from 'prop-types';  
  

// export const Section = ({
//   good,
//   neutral,
//   bad,
//   title,
//   onLeaveFeedback,
//   countTotalFeedback,
//   positivePercentage,
// }) => {
//   return (
//     <section>
      
//         <h1>{title}</h1>
//         <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
//         <h2>Statistics</h2>
//         {countTotalFeedback > 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
      
//     </section>
//   );
// };

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
//   countTotalFeedback: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };
