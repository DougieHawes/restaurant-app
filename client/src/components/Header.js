import "./style.min.css";

import { Link } from "react-router-dom";

const Header = () => {
  const showNavigation = () => (
    <nav className="nav-bar">
      <div className="logo-box">
        <h1 className="logo">
          <Link to="/">RestaurantApp</Link>
        </h1>
      </div>
      <div className="header-links">
        <div className="header-link">
          <Link to="/signin">SignIn</Link>
        </div>
        <div className="header-link">
          <Link to="/signup">SignUp</Link>
        </div>
      </div>
    </nav>
  );

  return <header className="header">{showNavigation()}</header>;
};

export default Header;

// <div className="search-box">
//   <input />
//   <button>
//     <i className="fas fa-search"></i>
//   </button>
// </div>
