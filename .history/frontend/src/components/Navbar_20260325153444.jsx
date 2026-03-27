import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

function Navbar() {
  // bring in user info from context
  const { user, logout } = UseUser();

  return (
    <nav>
      {user && <p>Welcome {user.username}!</p>}
      <ul>
        {user ? (
          <>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li onClick={logout}>
              <Link to="/login">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
