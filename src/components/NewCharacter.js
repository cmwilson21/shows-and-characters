import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'



const NewCharacter = () => {
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState("")
  const history = useHistory();
  const { showId } = useParams();


  useEffect(() => {
    const loadShow = async () => {
      const resp = await fetch(`http://localhost:9393/shows/${showId}`)
      const data = await resp.json();
      setShow(data);
      setLoading(false);
    }
    loadShow();
  }, [showId])

  if (loading) { return <h3>Humming theme music...</h3> };


  const handleChange = e => {
    setState(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {name: state}
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(data)
    }
    // debugger
    await fetch(`http://localhost:9393/shows/${showId}/characters`, options)
    history.push(`/shows/${showId}`);
  }

  return (
    <div>
      <h3>Create Character for {show.name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={state} onChange={handleChange} autoFocus={true} />
        <br />
        <br />
        <input type="submit" value="Enter Character" />
      </form>
    </div>
  )
}

export default NewCharacter


