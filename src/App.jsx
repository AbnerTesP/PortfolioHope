import React, {Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Resina = React.lazy(() => import('./Views/Resina/Resina'));
const Home = React.lazy(() => import('./Views/Home/Home'));
const Madeira = React.lazy(() => import('./Views/Madeira/Madeira'));
const Sapatos = React.lazy(() => import('./Views/Sapatos/Sapatos'));
const Chaves = React.lazy(() => import('./Views/Chaves/Chaves'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/resina" element={ <Resina /> } />
          <Route path="/madeira" element={<Madeira />}/>
          <Route path="/sapatos" element={<Sapatos />}/>
          <Route path="/Chaves" element={<Chaves />}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;