import React, { useEffect, useState } from 'react'
import ShowCard from './ShowCard'

const ShowList = () => {
  const [shows, setShows] = useState([])

  useEffect(async () => {
    const resp = await fetch('http://localhost:9393/shows')
    const data = await resp.json();
    setShows(data)
  }, [])

  const removeShow = id => {
    setShows(shows.filter(show => show.id !== id))
  }


  const deleteShow = async id => {
    await fetch(`http://localhost:9393/shows/${id}`, {method: "DELETE"})
    removeShow(id);
  }

  const showCard = shows.map((show, index) => <ShowCard key={index} show={show} deleteShow={deleteShow} /> )

  return (
    <div>
      <h1>Here are your shows!</h1>
      {showCard}
    </div>
  )
}

export default ShowList
