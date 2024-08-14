import { Route, Routes ,Navigate} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Battle from './Pages/Battle'
import Pokedex from './Pages/Pokedex'
import History from './Pages/History'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/history" element={<History />} />
      
      </Routes>

    </>
  )
}

export default App
