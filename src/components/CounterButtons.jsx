import PropTypes from "prop-types";

export default function CounterBtn({ text = "", onClick = () => {} }) {
  return <button onClick={onClick}>{text}</button>;
}

CounterBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
