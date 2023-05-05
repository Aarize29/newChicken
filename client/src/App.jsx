import { useState } from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Navbar from './components/navBar/Navbar'
import Dashborad from './pages/DashboardPage/Dashborad'
import ChickenMainPart from './pages/Prediction/chicken/MainPart'
import PlantMainPart from './pages/Prediction/plant/MainPart'
function App() {

  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Auth title="SignIn"/>}/>
        <Route path='/signup' element={<Auth title="SignUp"/>}/>
        <Route path='/chicken' element={<ChickenMainPart/>}/>
        <Route path='/plant' element={<PlantMainPart/>}/>
        <Route path='/dashboard' element={<Dashborad/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
