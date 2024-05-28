import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Resina from './Views/Resina/Resina'
import Home from './Views/Home/Home'
import Madeira from './Views/Madeira/Madeira'
import Sapatos from './Views/Sapatos/Sapatos'
import Chaves from './Views/Chaves/Chaves'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/resina" element={ <Resina /> } />
        <Route path="/madeira" element={<Madeira />}/>
        <Route path="/sapatos" element={<Sapatos />}/>
        <Route path="/Chaves" element={<Chaves />}/>
      </Routes>
    </Router>
  )
}

export default App
