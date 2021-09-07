import React from 'react';

const CharacterCard = ({character, show, deleteCharacter}) => {
  return (
    <li>
      {character.name} from {show.name} <button onClick={ () => deleteCharacter(character.id)}>Delete</button>
    </li>
  )
}

export default CharacterCard
