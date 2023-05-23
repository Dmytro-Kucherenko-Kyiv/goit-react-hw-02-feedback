import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<div>
			{options.map((name, index) =>
				<button
					key={index}
					type="button"
					onClick={onLeaveFeedback}>
					{name}
				</button>)}
		</div>
	)
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};