import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import CharacterCard from './CharacterCard';

const ShowDetails = () => {
  const [show, setShow] = useState([]);
  const { id } = useParams();
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const loadShows = async () => {
      const resp = await fetch(`http://localhost:9393/shows/${id}`)
      const data = await resp.json();

      setShow(data);
      setLoad(false);
    }
    loadShows();
  }, [id])

  if (load) {
    return <h3>Imagning theme song playing...</h3>
  } else {

    const removeCharacter = id => {
      setShow({
        ...show,
        characters: show.characters.filter(character => character.id !== id)
      })
    }

    const deleteCharacter = async id => {
      await fetch(`http://localhost:9393/characters/${id}`, {method: "DELETE"})
      removeCharacter(id);
    }

    const characterCards = show.characters.map((character, index) => <CharacterCard key={index} character={character} deleteCharacter={deleteCharacter} show={show} />)


    return (
      <div>
        <h1>Show Details</h1>
        <h3>{show.name}</h3>
        {characterCards}
        <h4>Or add a new character below.</h4>
        <p><NavLink to={`/shows/${show.id}/characters/new`}>Add Character</NavLink></p>
      </div>
    )
  }
}

export default ShowDetails
