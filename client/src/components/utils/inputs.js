export const Input1 = ({ name, type = "text", value, placeholder }) => (
  <div className="input">
    <label className="input-label" for={name}>
      {name}
    </label>
    <input
      className="input-box"
      type={type}
      value={value}
      placeholder={placeholder}
    />
  </div>
);
