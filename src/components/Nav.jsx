import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navBar">
        <ul className="navBar-list">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/users">Users</Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;