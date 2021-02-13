export const Message1 = ({ type = "error", message }) => (
  <div className={`message ${type}`}>{message}</div>
);
