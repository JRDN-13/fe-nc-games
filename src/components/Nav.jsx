import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navBar">
        <ul className="navBar-list">
          <Link to="/">Reviews</Link>
          <li>Categoroies</li>
          <li>Users</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
