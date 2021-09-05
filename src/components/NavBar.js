import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <NavLink className="navbar_link" to="/">Home</NavLink>
      <NavLink className="navbar_link" to="/shows">Show List</NavLink>
      <NavLink className="navbar_link" to="/new">Add New Show</NavLink>
    </div>
  )
}

export default NavBar
