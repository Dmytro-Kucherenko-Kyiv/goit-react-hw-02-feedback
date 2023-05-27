import PropTypes from 'prop-types';
import { Bad, Good, List, Neutral, Positive, Total } from './Name.styled';

export const Name = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage }) => {

  return (
    <List>
      <Good>Good: {good}</Good>
      <Neutral>Neutral: {neutral}</Neutral>
      <Bad>Bad: {bad}</Bad>
      <Total>Total: {total()}</Total>
      <Positive>Positive feedback: {positivePercentage()}%</Positive>
    </List>
  )
};

Name.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};