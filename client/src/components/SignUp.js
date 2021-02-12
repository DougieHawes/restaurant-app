import { useState } from "react";

import "./style.min.css";

import { Link } from "react-router-dom";

import { Button1 } from "./utils/buttons";
import { Input1 } from "./utils/inputs";
import Loader from "./utils/loader";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [state, setState] = useState({
    success: false,
    error: false,
    loading: false,
  });

  const { username, email, password, confirmpassword } = formData;
  const { success, error, loading } = state;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const showSignupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <Input1
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="enter username..."
        />
        <Input1
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
          placeholder="enter email..."
        />
        <Input1
          name="password"
          value={password}
          onChange={handleChange}
          type="password"
          placeholder="enter password..."
        />
        <Input1
          name="confirmpassword"
          value={confirmpassword}
          onChange={handleChange}
          type="password"
          placeholder="confirm password..."
        />
        <Button1 text="submit" />
      </form>
    );
  };

  return (
    <div className="signup">
      {showSignupForm()}
      <p>
        Already have an account? <Link to="/signin">SIGNIN</Link>
      </p>
      {success && <p className="alert success">SUCCESS</p>}
      {error && <p className="alert error">ERROR</p>}
      {loading && <Loader />}
      {JSON.stringify(formData)}
    </div>
  );
};

export default SignUp;
