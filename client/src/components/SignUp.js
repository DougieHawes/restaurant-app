import { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";

import { signup } from "../api/auth";

import { isAuthenticated } from "../helpers/auth";

import { Button1 } from "./utils/buttons";
import { Input1 } from "./utils/inputs";
import { Message1 } from "./utils/messages";
import Loader from "./utils/loader";

const SignUp = () => {
  let history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [state, setState] = useState({
    error: false,
    loading: false,
  });

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      history.push("/admin/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      history.push("/user/dashboard");
    }
  }, [history]);

  const { username, email, password, confirmpassword } = formData;
  const { error, loading } = state;

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
          history.push("/signin");
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
        <Loader />
      )}
    </div>
  );
};

export default SignUp;
