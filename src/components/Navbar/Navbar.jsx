// import { Link } from "react-router-dom"
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const onImageClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className=" p-4 h-15 w-full bg-black flex  ">
      <div>
        <img
          src="reactMovie_logo.png"
          className="p-3 h-12"
          onClick={onImageClick}
        />
      </div>

      <div className="navbar-menu p-4 ">
        <ul className="flex space-x-6 text-white cursor-pointer">
          <li>
            <NavLink to="/" className="hover:text-grey-500">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-grey-500">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-grey-500">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
