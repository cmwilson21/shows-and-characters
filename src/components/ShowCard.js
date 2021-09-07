import React from 'react'
import { NavLink } from 'react-router-dom'

const ShowCard = ({ show, deleteShow }) => {
  return (
    <li>
      <NavLink to={`/shows/${show.id}`}>{show.name}</NavLink> - <button onClick={() => deleteShow(show.id)}>Delete</button>
    </li>
  )
}

export default ShowCard
