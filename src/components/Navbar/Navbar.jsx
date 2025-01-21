import { Link } from "react-router-dom"
 const Navbar = () => {
  return (
    <div className=" p-4 h-15 w-full bg-black flex  ">
        <div>
            <img src="reactMovie_logo.png" className="p-3 h-12"/>
        </div>

        <div className="navbar-menu p-4 ">
          <ul className="flex space-x-6 text-white cursor-pointer">
            <li><Link to="/home"className="hover:text-grey-500 ">Home</Link></li>
            <li><Link to="/about"className="hover:text-grey-500">About</Link></li>
            <li><Link to="/contact"className="hover:text-grey-500">Contact</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar