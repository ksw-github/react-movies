import { Link, useLocation } from "react-router-dom";

function Navbar(){
  const location = useLocation();

  return(
    <nav className="fixed w-full border-b-8 border-black shadow-md bg-black">
      <ul className="flex justify-center gap-5 w-full border-b-8 border-dashed border-white py-3 text-white border-opacity-80">
        <li>
          <Link to="/" className={`${location.pathname === '/' ? 'text-red-500 font-bold' : 'hover:text-red-400'}`}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={`${location.pathname === '/about' ? 'text-red-500 font-bold' : 'hover:text-red-400'}`}>About Me</Link>
        </li>
      </ul>
    </nav>
)}

export default Navbar;