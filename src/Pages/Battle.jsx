import { useEffect, useState } from "react";
import vs from "../Images/Battle/VsIcon.png";
import ball from "../Images/Battle/Pokeball.png";
import winner from "../Images/Battle/Winner.png";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { addBattle } from "../Reduxstorage/historySlice";
import { BarLoader } from "react-spinners";


const Battle = () => {

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [selectedPoke1, setSelectedPoke1] = useState("bulbasaur");
  const [detailDataPoke1, setDetailDataPoke1] = useState({});
  const [selectedPoke2, setSelectedPoke2] = useState("charmeleon");
  const [detailDataPoke2, setDetailDataPoke2] = useState({});
  const [battleResult,setBattleResult] = useState({Win:'',Loss:''})

  const fetchData = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=500"
    );

    setData(response.data.results);

    const detailedPokemonData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${selectedPoke1}`
    );
    const detailedPokemonData2 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${selectedPoke2}`
    );

    // console.log(detailedPokemonData.data);
    setDetailDataPoke1(detailedPokemonData.data);
    setDetailDataPoke2(detailedPokemonData2.data);
  };

  useEffect(() => {
    fetchData();
  }, [selectedPoke1, selectedPoke2]);

  const handleChange1 = (event) => {
    setSelectedPoke1(event.target.value);
  };
  const handleChange2 = (event) => {
    setSelectedPoke2(event.target.value);
  };

  const pokemonImage = detailDataPoke1.sprites?.front_default || <BarLoader/>; // Optional chaining
  const pokemonName = detailDataPoke1.name || "Loading..."; // Provide a fallback value
  const pokemonType = detailDataPoke1.types?.[0]?.type?.name || "Loading..."; // Optional chaining
  const pokemonMove = detailDataPoke1.moves || [];
  const pokemonHp = detailDataPoke1.stats?.[0]?.base_stat || "Loading";

  const pokemonImage2 = detailDataPoke2.sprites?.front_default || <BarLoader/>; // Optional chaining
  const pokemonName2 = detailDataPoke2.name || "Loading..."; // Provide a fallback value
  const pokemonType2 = detailDataPoke2.types?.[0]?.type?.name || "Loading..."; // Optional chaining
  const pokemonMove2 = detailDataPoke2.moves || [];
  const pokemonHp2 = detailDataPoke2.stats?.[0]?.base_stat || "Loading";





  const startBattle= ()=>{
    let result = {}
      if (pokemonHp > pokemonHp2) {
        result = {Win:selectedPoke1, Loss:selectedPoke2}
        
        
      }else{
        
        result = {Win:selectedPoke2,Loss:selectedPoke1}
      }
      setBattleResult(result)
      const date = new Date();
      result.pokemonImage = pokemonImage;
      result.pokemonImage2 = pokemonImage2;
      result.pokemonName = pokemonName;
      result.pokemonName2 = pokemonName2;
      result.date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} `;
      const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
      let hours = date.getHours()
      hours = hours % 12;
      hours = hours ? hours : 12; 
      result.time = `${hours}:${date.getMinutes()} ${ampm}`;



      dispatch(addBattle(result))
      console.log(result)


  
      
    
  }



  return (
    <>
      {/* <div className=" h-110vh bg-customBlue    text-white pt-8 "> */}
        {/* <Navbar /> */}
        <div className="flex justify-center mt-2">
          <p className="font-kanit text-3xl">Let the Battle Begin</p>
        </div>
        <div className="grid gap-1 sm:grid-cols-12 p-10">
          <div className=" p-2 col-span-5">
            <p className="font-kanit text-xl text-lightBlue">
              Choose your first pokemon
            </p>
            <div className="flex bg-white w-11/12 rounded-lg h-8 border-2 border-lightBlue items-center">
              <img className=" h-4 pl-1" src={ball} alt="" />
              <select
                className="w-full ml-1 font-kanit text-gray-500 pl-2 border-l border-r-2 focus:outline-none"
                value={selectedPoke1}
                onChange={handleChange1}
              >
                {data.map((item, index) => {
                  return (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={battleResult.Win === selectedPoke1 || battleResult.Win==='' ? "h-72 w-11/12 mt-5 bg-white border-2 border-lightBlue rounded-2xl grid grid-cols-2 ":"h-72 w-11/12 mt-5  bg-[#5A93D1]/80 -z-10 opacity-50 border-2 border-lightBlue rounded-2xl grid grid-cols-2 "}>
              <div className="flex flex-col items-center  ">
                <img className={battleResult.Win === selectedPoke1  ? 'block  absolute left-0':'hidden'} src={winner} alt="" />
                <img className="  h-44" src={pokemonImage} alt="" />
                <h1 className="flex font-kanit  text-black justify-center">
                  {pokemonName}
                </h1>
                <p className="flex font-kanit   text-black justify-center">
                  {pokemonType}
                </p>
              </div>
              <div className="p-5">
                <h1 className="font-kanit mt-5 text-black  text-xl">
                  Pokemon stats
                </h1>
                <table className=" sm:w-24 md:w-36 xl:w-40 font-kanit text-black border-b-2">
                  <tr className="border-b border-t">
                    <th>HP</th>
                    <th>{pokemonHp}</th>
                  </tr>
                  <tr className="mt-1">
                    <td rowSpan={"5"} className="content-start">
                      Moves
                    </td>
                    <td>Razor leaf</td>
                  </tr>
                  {pokemonMove.slice(0, 3).map((item, index) => {
                   

                    return (
                      <>
                        {
                          <tr key={index}>
                            <td>{item.move.name}</td>
                          </tr>
                        }
                      </>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center col-span-2">
            <img className="h-44" src={vs} alt="" />
          </div>
          <div className=" p-2 col-span-5">
            <p className="font-kanit text-xl text-lightBlue">
              Choose your first pokemon
            </p>
            <div className="flex bg-white w-11/12 rounded-lg h-8 border-2 border-lightBlue items-center">
              <img className=" h-4 pl-1" src={ball} alt="" />

              <select
                className="w-full ml-1 font-kanit text-gray-500 pl-2 border-l border-r-2 focus:outline-none"
                value={selectedPoke2}
                onChange={handleChange2}
              >
                {data.map((item, index) => {
                  return (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={battleResult.Win === selectedPoke2 || battleResult.Win==='' ? "h-72 w-11/12 mt-5 bg-white border-2 border-lightBlue rounded-2xl grid grid-cols-2 ":"h-72 w-11/12 mt-5  bg-[#5A93D1]/80 -z-10 opacity-50 border-2 border-lightBlue rounded-2xl grid grid-cols-2 "}>
              <div className="flex flex-col items-center">
              <img className={battleResult.Win === selectedPoke2 ? 'block z-10 absolute mr-48':'hidden'} src={winner} alt="" />
                <img className=" h-44" src={pokemonImage2} alt="" />
                <h1 className="flex  font-kanit text-black justify-center">
                  {pokemonName2}
                </h1>
                <p className="flex font-kanit text-black justify-center">
                  {pokemonType2}
                </p>
              </div>
              <div className="p-5">
                <h1 className="font-kanit mt-5 text-black  text-xl">
                  Pokemon stats
                </h1>
                <table className=" sm:w-24 md:w-36 xl:w-40 font-kanit text-black border-b-2">
                  <tr className="border-b border-t">
                    <th>HP</th>
                    <th>{pokemonHp2}</th>
                  </tr>
                  <tr className="mt-1">
                    <td rowSpan={"5"} className="content-start">
                      Moves
                    </td>
                    <td>Razor leaf</td>
                  </tr>
                  {pokemonMove2.slice(0, 3).map((item, index) => {
                  

                    return (
                      <>
                        {
                          <tr key={index}>
                            <td>{item.move.name}</td>
                          </tr>
                        }
                      </>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
          {/* button suru  */}
        </div>
        <div className="flex justify-center text-black">
          {" "}
          <button className="border-2 h-14 px-10 rounded-full border-lightBlue text-lightBlue text-xl font-kanit" onClick={startBattle}>
            Start Battle
          </button>
        </div>
      {/* </div> */}
    </>
  );
};

export default Battle;
