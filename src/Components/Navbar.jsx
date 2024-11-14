import logo from "../Images/Homepage/PokemonLogo.png";
import ball from '../Images/Battle/Pokeball.png';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  console.log('nav running')
  const renderLink = (path, label) => {
    const isActive = location.pathname === path;
    return (
      <Link to={path}>
        <li className="flex items-center justify-center ">
          {isActive && <img className="mr-2 ssm:h-3 lg:h-5 w-5" src={ball} alt="Pokéball" />}
          <p className={isActive ? "text-customBlue min-w-32 " : "text-black min-w-32 " }  >{label}</p>
        </li>
      </Link>
    );
  };

  return (
    <>
      <div className=" absolute sm:w-11/12 lg:w-11/12 ssm:h-2 lg:h-20 bg-white rounded-3xl text-black justify-between z-1000 mx-10 p-11 flex items-center">
        <div>
          <img className="sm:hidden md:block " src={logo} alt="Pokemon Logo" />
        </div>
        <div>
          <ul className="list-none  flex  lg:space-x-12 ssm:space-x-5 ssm:text-lg lg:text-xl">
            {renderLink('/', 'Home')}
            {renderLink('/battle', 'Battle')}
            {renderLink('/history', 'History')}
            {renderLink('/pokedex', 'Pokedex')}
            {renderLink('#', 'About')}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
