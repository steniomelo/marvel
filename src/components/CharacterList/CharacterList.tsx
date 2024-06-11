import CharacterCard from './CharacterCard/CharacterCard';
import { Character } from '../../types/character';
import './style.scss';
import CharacterCardSkeleton from './CharacterCard/CharacterCardSkeleton';
import { RootState } from '../../reducers/store';
import { useSelector } from 'react-redux';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList = ({ characters }: CharacterListProps) => {

  const isLoading = useSelector((state: RootState) => state.characters.status);

  return (
      <div className="character-list">
        {isLoading === 'loading' ? (
          <>
            {Array.from({ length: 20 }).map((_, index) => (
              <CharacterCardSkeleton key={index} />
            ))}
          </>
        ) : ( 
        
          <>
            {characters.map(character => (
              <CharacterCard
                key={character.id}
                character={character}
              />
            ))
            }
          </>
        )}
      </div>
  );
};

export default CharacterList;
