import CharacterCard from './CharacterCard/CharacterCard';
import { Character } from '../../types/character';
import './style.scss';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList = ({ characters }: CharacterListProps) => {

  return (
    <>
      <div className="character-list">
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </>
  );
};

export default CharacterList;
