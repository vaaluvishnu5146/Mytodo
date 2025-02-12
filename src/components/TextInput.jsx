export default function TextInput({
  placeholder = "",
  onChange = () => {},
  value = "",
}) {
  return <input placeholder={placeholder} onChange={onChange} value={value} />;
}

TextInput.propTypes = {
  placeholder: String,
  onChange: Function,
  value: String,
};
