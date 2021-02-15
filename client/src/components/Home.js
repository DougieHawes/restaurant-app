import { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { isAuthenticated } from "../helpers/auth";

const Home = () => {
  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      history.push("/admin/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      history.push("/user/dashboard");
    }
  }, [history]);

  return <div className="Home">HOME</div>;
};

export default Home;
