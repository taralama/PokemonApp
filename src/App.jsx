import { Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Battle from "./Pages/Battle";
import Pokedex from "./Pages/Pokedex";
import History from "./Pages/History";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/history" element={<History />} />
        </Route>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
