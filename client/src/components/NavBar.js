import { Link } from "react-router-dom";
import About from "../pages/About";
const NavBar = () =>{
    return(
        <>
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-2xl tracking-tight">Code Dash</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
        </div>
        <div>
          
          <Link to={"/"}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Home</button></Link>
          
          
            <Link to={"/about"}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">About</button></Link>
            
          
        </div>
      </div>
    </nav>
        </>
    )
}
export default NavBar;