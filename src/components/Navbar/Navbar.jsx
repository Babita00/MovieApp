
 const Navbar = () => {
  return (
    <div className=" p-4 h-15 w-full bg-black flex  ">
        <div>
            <img src="reactMovie_logo.png" className="p-3 h-12"/>
        </div>

        <div className="navbar-menu p-4 ">
          <ul className="flex space-x-6 text-white cursor-pointer">
            <li><a href="/"className="hover:text-grey-500 "/>Home</li>
            <li><a href="/"className="hover:text-grey-500"/>About</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar