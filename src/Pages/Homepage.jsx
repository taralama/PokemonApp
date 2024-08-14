import React from "react";

import dragon from '../Images/Homepage/image11.png'
import '../index.css'
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="md:h-screen xl:h-screen lg:w-screen bg-customBlue    text-white pt-8 ">
        <Navbar/>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 sm:gap-6 md:gap-1 xl:gap-96   p-10 ">
          <div className=" p-5 items-center content-center">
            <h2 className="text-4xl font-kanit">Welcome to </h2>
            <h1 className="text-6xl font-kanit">Battle Pokemon</h1>
            <p className="mt-4 font-kanit ">
              Battle Pokemon is a fun and enagaging way to battle between
              pokemons, whether for casual play or move serious competition
              between the pokemons.
            </p>
            <button onClick={()=>{
              navigate('/battle')
            }} className= " font-kanit text-lightBlue border-lightBlue mt-5 h-10 border-2 rounded-full px-5">
              Start Battle
            </button>
          </div>
          <div>
            <img  className=" sm:h-72 lg:h-96" src={dragon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
