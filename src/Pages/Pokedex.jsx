import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import ball from "../Images/Battle/Pokeball.png";
import tail from "../Images/Battle/Trailing.png";
import searchIcon from "../Images/Pokedex/search.png";
import line from '../Images/Pokedex/Line.png'

import axios from "axios";
import { RingLoader } from "react-spinners";

const Pokedex = () => {

  const [data,setData] = useState([]);
  const [pokeName,setPokename] = useState();
  const [load,setLoad] = useState(true)
  const [searchPara,setSearchPara] = useState({Name: '',Type: ''})

  useEffect(()=>{
    const fetchData = async() =>{
      try {
        const results = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100`)
        
        const response = results.data.results
        // console.log(response.data.results);

        const detailedPokemonData = await Promise.all(
          response.map(async (pokemon) => {
            const pokemonDetails = await axios.get(pokemon.url);
            return pokemonDetails.data;
          }))

          
          setData(detailedPokemonData)
          
          
          
        } catch (error) {
          console.log(error);
          
        }finally{
        setLoad(false)

      }
    }

    fetchData();
  },[])

  const filteredData = data.filter(item =>{
    return (searchPara.Name ? item.name.includes(searchPara.Name): true) &&
    (searchPara.Type ? item.types[0].type.name.includes(searchPara.Type): true)
  })





  return (
    <div className=" h-fullheight bg-customBlue    text-white pt-8 ">
      <Navbar />
      <div className="mt-5 mx-10 flex items-end">
        <h1 className="text-3xl font-kanit">Pokedex</h1>
        <p className="text-lightBlue ml-1 font-kanit">(450 pokemons)</p>

        {/* search box */}
      </div>

      <div className="sm:flex-row md:flex  justify-around mx-10 gap-5 mt-5 font-kanit">
        <div>
          <h1>Search Pokemon</h1>
          <div className="flex bg-white  rounded-lg h-11 border-2 border-lightBlue items-center">
            <img className=" h-4 pl-1" src={ball} alt="" />
            <input
              className=" w-72 ml-1 text-gray-500 font-kanit pl-2 border-l border-r-2 focus:outline-none  "
              type="text"
              placeholder="Your pokemon"
              onChange={(event)=>{
                setSearchPara({...searchPara,Name:event.target.value})
              }}
            />
            <img className=" h-10 p-2" src={searchIcon} alt="" />
          </div>
        </div>

        <div>
          <h1>Pokemon Type</h1>
          <div className="flex bg-white  rounded-lg h-11 border-2 border-lightBlue items-center">
            <img className=" h-4 pl-1" src={ball} alt="" />
            <input
              className=" w-72 ml-1 text-gray-500 font-kanit pl-2 border-l border-r-2 focus:outline-none  "
              type="text"
              placeholder="All"
              onChange={(event)=>{
                setSearchPara({...searchPara,Type: event.target.value})
              }}
            />
            <img className="h-10" src={tail} alt="" />
          </div>
        </div>

        <div>
          <h1>Sort by</h1>
          <div className="flex bg-white  rounded-lg h-11 border-2 border-lightBlue items-center">
            <img className=" h-4 pl-1" src={ball} alt="" />
            <input
              className=" w-72 ml-1 text-gray-500 font-kanit pl-2 border-l border-r-2 focus:outline-none  "
              type="text"
              placeholder="A-Z"
              
            />
            <img className="h-10" src={tail} alt="" />
          </div>
        </div>
      </div>
      {/* line */}

      <div className="mt-5 flex justify-center mx-10">
        <img src={line} alt="" />
      </div>


    {/* list of pokemon */}
    
        <div className=" p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 text-black font-kanit">
        {
  load ? (
    <div className="flex relative justify-center"><RingLoader color="white"  /></div>
  ) : (
    filteredData?.map((item, index) => (
      <div key={index} className="h-72 lg:w-52 bg-white p-2 mt-2 flex flex-col justify-center border-4 border-lightBlue rounded-xl">
        
        <img className="h-48" src={item.sprites.front_default} alt={item.name} />
        <h1 className="flex justify-center mt-1">{item.name}</h1>
        <p className="flex justify-center">{item.types[0].type.name}</p>
      </div>
    ))
  )
}
   
      </div>
      
    
    




    </div>
  );
};

export default Pokedex;
