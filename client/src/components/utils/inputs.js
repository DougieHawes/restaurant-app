export const Input1 = ({
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => (
  <div className="input">
    <label className="input-label">{name}</label>
    <input
      className="input-box"
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);
