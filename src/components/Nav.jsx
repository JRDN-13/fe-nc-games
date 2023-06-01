import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navBar">
        <ul className="navBar-list">
          <Link to="/">Home</Link>
          <li>Categories</li>
          <li>Users</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
