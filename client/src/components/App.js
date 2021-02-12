import "./style.min.css";

import { Switch, Route } from "react-router-dom";

import Header from "./Header";

import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import NotFound from "./NotFound";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="route-box">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
