import { Link } from "react-router-dom";
import About from "../pages/About";
import Logo from '../assets/CodeDashLogo.png'
const NavBar = () =>{
    return(
        <>
        {/* <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={Logo} style={{height:"40px"}} alt='logo'/>
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
    </nav> */}

<header class="text-gray-600 body-font navbar">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <img src={Logo} style={{height:"40px"}} alt='logo'/>
      <span class="ml-3 text-xl text-white">Code dash</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Home</a>
      <a class="mr-5 hover:text-gray-900">About</a>
      <a class="mr-5 hover:text-gray-900">Rooms</a>
      <a class="mr-5 hover:text-gray-900">Problems</a>
    </nav>
    <button class="inline-flex items-center bg-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
        </>
    )
}
export default NavBar;