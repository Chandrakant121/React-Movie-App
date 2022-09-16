import { React } from "react"
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
// import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import MoviesData from "./Components/MoviesData";
import Dashboard from "./Components/Dashboard";
import Homepage from "./Components/Homepage";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/moviesdata" element={<MoviesData />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )


}


export default App;

// "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0698d5b029ea105a22b2da4a518b2359"