import Navbar from "../Components/Navbar";
import bird from "../Images/History/bird.png";
import vs from "../Images/Battle/VsIcon.png";
import ninetale from "../Images/History/Ninetales.png";
import winner from "../Images/History/Winner.png";
import line from "../Images/History/Line.png";
import { useSelector } from "react-redux";

const History = () => {
  const list = useSelector((state) => state.battleList);
  console.log(list);

  return (
    <>
      <div className=" h-full bg-customBlue    text-white pt-8 ">
        <Navbar />
        <div className="mt-5 mx-10 flex items-end">
          <h1 className="text-3xl font-kanit">Battle History</h1>
          <p className="text-lightBlue ml-1 font-kanit">
            ({list.length + 1} battles)
          </p>
        </div>
        <div>
          <div className=" justify-center p-6  h-full mx-10 mt-5 bg-historyBlue rounded-xl">
            <div className="flex p-2 border-borderBlue border rounded-xl justify-between items-center font-kanit mt-1">
              <div>1.</div>
              <div>
                <p className="text-lightBlue">Date</p>
                <h1>2024-1-1</h1>
              </div>
              <div>
                <p className="text-lightBlue">Time</p> <h1>12:00 AM</h1>
              </div>
              <div>
                <img src={line} alt="" />
              </div>
              <div>
                <img className="h-15" src={bird} alt="" />
              </div>
              <div>
                <h1>Pidgeot</h1>
              </div>
              <div>
                <img className="h-14" src={vs} alt="" />
              </div>
              <div>
                <h1>Ninetales</h1>
              </div>
              <div>
                <img src={ninetale} alt="" />
              </div>
              <div>
                <img src={line} alt="" />
              </div>
              <div>
                <h1>Winner</h1>
              </div>
              <div>
                <img src={winner} alt="" />
              </div>
              <div>
                <img src={ninetale} alt="" />
              </div>
            </div>
            {list.map((item, index) => (
              <div
                key={index}
                className="flex p-2 border-borderBlue border rounded-xl justify-between items-center font-kanit mt-1"
              >
                <div key={index}>{index + 1 + 1}.</div>
                <div>
                  <p className="text-lightBlue">Date</p>
                  <h1>{item.date}</h1>
                </div>
                <div>
                  <p className="text-lightBlue">Time</p> <h1>{item.time}</h1>
                </div>
                <div>
                  <img src={line} alt="" />
                </div>
                <div>
                  <img className="h-15" src={item.pokemonImage} alt="" />
                </div>
                <div>
                  <h1>{item.pokemonName}</h1>
                </div>
                <div>
                  <img className="h-14" src={vs} alt="" />
                </div>
                <div>
                  <h1>{item.pokemonName2}</h1>
                </div>
                <div>
                  <img src={item.pokemonImage2} alt="" />
                </div>
                <div>
                  <img src={line} alt="" />
                </div>
                <div>
                  <h1>Winner</h1>
                </div>
                <div>
                  <img src={winner} alt="" />
                </div>
                <div>
                  <img
                    src={
                      item.win === item.pokemonName
                        ? item.pokemonImage
                        : item.pokemonImage2
                    }
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
