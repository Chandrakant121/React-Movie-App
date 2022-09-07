import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    let datastore = JSON.parse(localStorage.getItem("logindetail"));
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
    }
    const movies = () => {
        navigate("/moviesdata")
    }
    return (
        <div>
            <div className='homepage'>
                <Link className='text' onClick={logout} to="/login">{datastore ? "Logout" : "Login"}</Link>
                <Link className='text' onClick={movies} to="/register">{datastore ? "" : "Register"}</Link>
            </div>
        </div>
    )
}

export default Navbar