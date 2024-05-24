import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Resina from './Views/Resina/Resina'
import Home from './Views/Home/Home'
import Madeira from './Views/Madeira/Madeira'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/resina" element={ <Resina /> } />
        <Route path="/madeira" element={<Madeira />}/>
      </Routes>
    </Router>
  )
}

export default App
