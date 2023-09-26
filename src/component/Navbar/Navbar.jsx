
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="">
      <nav className="flex justify-between items-center  py-6">

       <img src="./Resources/Logo.png" alt="" />

        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
              Home
            </NavLink>

          </li>

          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
              Donation
            </NavLink>

            
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
              Statistics
            </NavLink>

            
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;
