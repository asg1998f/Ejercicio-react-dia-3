import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {Reserve} from './components/Reserve'

function App() {
  

  return (
    <div>
      <h1>Alberto's</h1>
      <Reserve/>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
