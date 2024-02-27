import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue">
      <NavLink to="/">
        <img src="./home-icon.png" alt="" />
        {/* <button>Home</button> */}
      </NavLink>
    </nav>
  );
}

export default Navbar;
