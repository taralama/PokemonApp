import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Battle from './Pages/Battle'
import Pokedex from './Pages/Pokedex'
import History from './Pages/History'
import Try from './Pages/Try'

function App() {


  return (
    <>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/history" element={<History />} />
        <Route path="/try" element={<Try />} />
      </Routes>

    </>
  )
}

export default App
