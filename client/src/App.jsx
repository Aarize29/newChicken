import { useState } from 'react'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import ChickenMainPart from './pages/Prediction/chicken/MainPart'
import PlantMainPart from './pages/Prediction/plant/MainPart'
import Auth from './pages/Auth/Auth'
import Navbar from './components/navbar/Navbar'
import Dashborad from './pages/DashboardPage/Dashborad'
function App() {

  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth title="SignIn"/>}/>
        <Route path='/signup' element={<Auth title="SignUp"/>}/>
        <Route path='/chicken_main' element={<ChickenMainPart/>}/>
        <Route path='/plant_main' element={<PlantMainPart/>}/>
        <Route path='/dashboard' element={<Dashborad/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
