import React, { useEffect, useState } from 'react'
import ShowCard from './ShowCard'

const ShowList = () => {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadShows = async () => {
      const resp = await fetch('http://localhost:9393/shows')
      const data = await resp.json();
      setShows(data)
      setLoading(false)
    }
    loadShows();
  }, [])

  const removeShow = id => {
    setShows(shows.filter(show => show.id !== id))
  }


  const deleteShow = async id => {
    await fetch(`http://localhost:9393/shows/${id}`, { method: "DELETE" })
    removeShow(id);
  }

  if(loading) {return <h3>Humming the theme song...</h3>}

  const showCard = shows.map((show, index) => <ShowCard key={index} show={show} deleteShow={deleteShow} />)

  return (
    <div>
      <h1>Here are your shows!</h1>
      {showCard}
      {/* <h4>Click on a show to see the characters or add a new one.</h4> */}
    </div>
  )
}

export default ShowList
