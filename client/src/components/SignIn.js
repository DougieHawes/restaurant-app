import { useState } from "react";

import { Link, Redirect } from "react-router-dom";

import "./style.min.css";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

import { signin } from "../api/auth";

import { Button1 } from "./utils/buttons";
import { Input1 } from "./utils/inputs";
import { Message1 } from "./utils/messages";
import Loader from "./utils/loader";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [state, setState] = useState({
    error: false,
    loading: false,
    redirect: false,
  });

  const { email, password } = formData;
  const { error, loading, redirect } = state;

  const handleChange = (e) => {
    setState({ ...state, error: "", success: "" });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(email) || isEmpty(password)) {
      setState({ ...state, error: "all fields are required" });
      setTimeout(function () {
        setState({ ...state, error: "" });
      }, 3000);
    } else if (!isEmail(email)) {
      setState({ ...state, error: "invalid email" });
      setTimeout(function () {
        setState({ ...state, error: "" });
      }, 3000);
    } else {
      const data = { email, password };

      setState({ ...state, loading: true });

      signin(data)
        .then((response) => {
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

  const showSigninForm = () => {
    return (
      <form onSubmit={handleSubmit}>
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
        <Button1 text="submit" />
      </form>
    );
  };

  return (
    <div className="signin">
      {!loading ? (
        <>
          {showSigninForm()}
          <p className="sign-toggle">
            Already have an account? <Link to="/signup">SIGNUP</Link>
          </p>
          {error && <Message1 message={error} />}
          {redirect && <Redirect to="/dashboard" />}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SignIn;
