import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MainPart from './components/MainPart'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <div className="App">
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/main' element={<MainPart/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
