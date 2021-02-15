import { Link, withRouter } from "react-router-dom";

import { isAuthenticated } from "../helpers/auth";

const Header = () => {
  const showNavigation = () => (
    <nav className="nav-bar">
      <div className="logo-box">
        <h1 className="logo">
          <Link to="/">RestaurantApp</Link>
        </h1>
      </div>
      <div className="header-links">
        {isAuthenticated() ? (
          <>
            {isAuthenticated.role === 0 ? (
              <>
                <div className="header-link">
                  <Link to="/user/dashboard">Dashboard</Link>
                </div>
              </>
            ) : (
              <>
                <div className="header-link">
                  <Link to="/admin/dashboard">Dashboard</Link>
                </div>
              </>
            )}
            <div className="header-link search-box">
              <input />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="header-link">Logout</div>
          </>
        ) : (
          <>
            <div className="header-link">
              <Link to="/signin">SignIn</Link>
            </div>
            <div className="header-link">
              <Link to="/signup">SignUp</Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );

  return <header className="header">{showNavigation()}</header>;
};

export default withRouter(Header);
