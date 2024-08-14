import React, { useEffect, useState } from "react";
import ball from "../Images/Battle/Pokeball.png";
import tail from "../Images/Battle/Trailing.png";
import axios from "axios";

const Try = () => {
    const [data,setData] = useState([])
    const [selectedPoke1,setSelectedPoke1] = useState('bulbasaur')
    const [detailDataPoke1,setDetailDataPoke1] = useState({})
    const [selectedPoke2,setSelectedPoke2] = useState('charmeleon')
    const [detailDataPoke2,setDetailDataPoke2] = useState({})
    const [detailData,setDetailData] = useState([])

    const fetchData = async() =>{
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=500')
        
        setData(response.data.results)

        

        const detailedPokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPoke1}`)
        const detailedPokemonData2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPoke2}`)
            
        

        console.log(detailedPokemonData.data)
        setDetailDataPoke1(detailedPokemonData.data)
        setDetailDataPoke2(detailedPokemonData2.data)


    }

    useEffect(()=>{
        fetchData();
    },[selectedPoke1,selectedPoke2 ])

    const handleChange1= (event) => {
        setSelectedPoke1(event.target.value);
      };
    const handleChange2= (event) => {
        setSelectedPoke2(event.target.value);
      };

      const pokemonImage = detailDataPoke1.sprites?.front_default || ''; // Optional chaining
      const pokemonName = detailDataPoke1.name || 'Loading...'; // Provide a fallback value
      const pokemonType = detailDataPoke1.types?.[0]?.type?.name || 'Loading...'; // Optional chaining
      const pokemonMove = detailDataPoke1.moves || [];
      const pokemonHp = detailDataPoke1.stats?.[0]?.base_stat || 'Loading';

      const pokemonImage2 = detailDataPoke2.sprites?.front_default || ''; // Optional chaining
      const pokemonName2 = detailDataPoke2.name || 'Loading...'; // Provide a fallback value
      const pokemonType2 = detailDataPoke2.types?.[0]?.type?.name || 'Loading...'; // Optional chaining
      const pokemonMove2 = detailDataPoke2.moves || [];
      const pokemonHp2 = detailDataPoke2.stats?.[0]?.base_stat || 'Loading';
  
      console.log( pokemonHp)

  return (
    <>

    {/* first pokemon */}
      <div className="h-screen bg-customBlue">
        <p className="font-kanit text-xl text-lightBlue">
          Choose your first pokemon
        </p>
        <div className="flex bg-white w-72 rounded-lg h-8 border-2 border-lightBlue items-center">
          <img className=" h-4 pl-1" src={ball} alt="" />
          <select className="w-96 ml-1 font-kanit text-gray-500 pl-2 border-l border-r-2 focus:outline-none" value={selectedPoke1} onChange={handleChange1}>{data.map((item,index)=>{
            return <option key={index} value={item.name}>{item.name}</option>
          })}</select>
          

          
        </div>
        <div className="h-72 w-96 mt-5 bg-white border-2 border-lightBlue rounded-2xl grid grid-cols-2 ">
          <div className="grid">
            <img className="mt-5 h-44" src={pokemonImage} alt="" />
            <h1 className="flex font-kanit text-black justify-center">
              {pokemonName}
            </h1>
            <p className="flex font-kanit text-black justify-center">{pokemonType}</p>
          </div>
          <div className="p-5">
            <h1 className="font-kanit mt-5 text-black  text-xl">
              Pokemon stats
            </h1>
            <table className=" w-44 font-kanit text-black border-b-2">
              <tr className="border-b border-t">
                <th>HP</th>
                <th>{pokemonHp2}</th>
              </tr>
              <tr className="mt-1">
                <td rowSpan={"5"} className="content-start">
                  Moves
                </td>
                <td></td>
              </tr>
              { pokemonMove.slice(0,3).map((item,index)=>{
                console.log(item);
                

              return <>
              {
                <tr>
                    <td>{item.move.name}</td>
                  </tr>
              }
              
                
              </>
              })
              }
            </table>
          </div>
        </div>
      </div>


        {/* second pokemon */}
      <div className="h-screen bg-customBlue">
        <p className="font-kanit text-xl text-lightBlue">
          Choose your first pokemon
        </p>
        <div className="flex bg-white w-72 rounded-lg h-8 border-2 border-lightBlue items-center">
          <img className=" h-4 pl-1" src={ball} alt="" />
          <select className="w-96 ml-1 font-kanit text-gray-500 pl-2 border-l border-r-2 focus:outline-none" value={selectedPoke2} onChange={handleChange2}>{data.map((item,index)=>{
            return <option key={index} value={item.name}>{item.name}</option>
          })}</select>
          {console.log()}

          
        </div>
        <div className="h-72 w-96 mt-5 bg-white border-2 border-lightBlue rounded-2xl grid grid-cols-2 ">
          <div className="grid">
            <img className="mt-5 h-44" src={pokemonImage2} alt="" />
            <h1 className="flex font-kanit text-black justify-center">
              {pokemonName2}
            </h1>
            <p className="flex font-kanit text-black justify-center">{pokemonType2}</p>
          </div>
          <div className="p-5">
            <h1 className="font-kanit mt-5 text-black  text-xl">
              Pokemon stats
            </h1>
            <table className=" w-44 font-kanit text-black border-b-2">
              <tr className="border-b border-t">
                <th>HP</th>
                <th>{pokemonHp}</th>
              </tr>
              <tr className="mt-1">
                <td rowSpan={"5"} className="content-start">
                  Moves
                </td>
                <td></td>
              </tr>
              { pokemonMove2.slice(0,3).map((item,index)=>{
                console.log(item);
                

              return <>
              {
                <tr>
                    <td>{item.move.name}</td>
                  </tr>
              }
              
                
              </>
              })
              }
            </table>
          </div>
        </div>
      </div>

    </>
  );
};

export default Try;
