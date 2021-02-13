import { useState } from "react";

import { Link, Redirect } from "react-router-dom";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";

import { signup } from "../api/auth";

import { Button1 } from "./utils/buttons";
import { Input1 } from "./utils/inputs";
import { Message1 } from "./utils/messages";
import Loader from "./utils/loader";

import "./style.min.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [state, setState] = useState({
    error: false,
    loading: false,
    redirect: false,
  });

  const { username, email, password, confirmpassword } = formData;
  const { error, loading, redirect } = state;

  const handleChange = (e) => {
    setState({ ...state, error: "", success: "" });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(confirmpassword)
    ) {
      setState({ ...state, error: "all fields are required" });
      setTimeout(function () {
        setState({ ...state, error: "" });
      }, 3000);
    } else if (!isEmail(email)) {
      setState({ ...state, error: "invalid email" });
      setTimeout(function () {
        setState({ ...state, error: "" });
      }, 3000);
    } else if (!equals(password, confirmpassword)) {
      setState({ ...state, error: "passwords do not match" });
      setTimeout(function () {
        setState({ ...state, error: "" });
      }, 3000);
    } else {
      const data = { email, username, password };

      setState({ ...state, loading: true });

      signup(data)
        .then((response) => {
          console.log(response);

          setState({ ...state, redirect: true });
        })
        .catch((err) => {
          console.log("axios signup error:", err);

          setState({
            ...state,
            loading: false,
            error: err.response.data.errorMsg,
          });

          setTimeout(function () {
            setState({ ...state, error: "" });
          }, 3000);
        });
    }
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
      {!loading ? (
        <>
          {showSignupForm()}
          <p className="sign-toggle">
            Already have an account? <Link to="/signin">SIGNIN</Link>
          </p>
          {error && <Message1 message={error} />}
        </>
      ) : (
        <>
          <Loader />
          {redirect && <Redirect to="/signin" />}
        </>
      )}
    </div>
  );
};

export default SignUp;
