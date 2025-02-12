import PropTypes from "prop-types";

// Start letter of the component name should be in Capital
function Para(props = {}) {
  return <p>{props.text}</p>;
}

Para.propTypes = {
  text: PropTypes.number,
};

export default Para;
