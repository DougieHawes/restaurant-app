import { Switch, Route } from "react-router-dom";

import Header from "./Header";

import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";

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
          <Route path="/user/dashboard" component={UserDashboard} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
