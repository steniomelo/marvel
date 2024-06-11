import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterDetails, fetchCharacterComics } from '../../services/api';
import { Character } from '../../types/character';
import { Comic } from '../../types/comic';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    fetchCharacterDetails(Number(id)).then(response => {
      setCharacter(response.data.data.results[0]);
      console.log('character', response.data.data.results[0]);
    });
    fetchCharacterComics(Number(id)).then(response => {
      setComics(response.data.data.results);
    });
  }, [id]);
  

  // if (!character) {
    
  // } else {
  //   setIsFavorite(favorites.some(fav => fav.id === character.id));
  // }

  return (
    <div>
      {character && (
        <>
          <h1>{character.name}</h1>
          <p>{character.description}</p>
          <img src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`} alt={character.name} />

          <FavoriteButton character={character} />
          <h2>Comics</h2>
          <ul>
            {comics.map(comic => (
              <li key={comic.id}>
                {comic.title}
                <img src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`} alt={comic.title} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CharacterDetail;
