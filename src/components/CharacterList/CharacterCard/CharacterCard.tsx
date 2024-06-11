import { Link } from 'react-router-dom';
import { Character } from '../../../types/character';
import FavoriteButton from '../../FavoriteButton/FavoriteButton';
import './style.scss';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => (
  <div className="character-card">
    <Link to={`/character/${character.id}`}>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} className='character-card-img' />
    </Link>
    <h3>{character.name}</h3>
    <FavoriteButton character={character} />
  </div>
);

export default CharacterCard;
