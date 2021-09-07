import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'



const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCharacters = async () => {
      const resp = await fetch('http://localhost:9393/characters')
      const data = await resp.json();
      setCharacters(data)
      setLoading(false);
    }
    loadCharacters();
  }, [])
  if (loading) { return <h3>Humming the theme song...</h3> }

  const removeCharacter = id => {
    setCharacters(characters.filter(character => character.id !== id))
  }


  const deleteCharacter = async id => {
    await fetch(`http://localhost:9393/characters/${id}`, { method: "DELETE" })
    removeCharacter(id);
  }

  const characterCard = characters.map((character, index) => <CharacterCard key={index} character={character} show={character.show} deleteCharacter={deleteCharacter} />)

  return (
    <div>
      <h1>Here are your shows' characters!</h1>
      {characterCard}
      {/* <p>Click a show from the Show List to add a new character.</p> */}
    </div>
  )
}

export default CharacterList
