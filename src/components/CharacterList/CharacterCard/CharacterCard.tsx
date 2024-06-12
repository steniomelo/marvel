import { Link } from "react-router-dom";
import { Character } from "../../../types/character";
import FavoriteButton from "../../FavoriteButton/FavoriteButton";
import "./style.scss";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => (
  <div className="character-card">
    <Link to={`/heroi/${character.id}`}>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="character-card-img"
      />
    </Link>

    <div className="character-card-title">
      <h3 className="character-card-name">{character.name}</h3>
      <FavoriteButton character={character} />
    </div>
  </div>
);

export default CharacterCard;
