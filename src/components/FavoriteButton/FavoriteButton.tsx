import { Character } from "../../types/character";
import { RootState } from "../../reducers/store";
import { toggleFavorite } from "../../reducers/favorites";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./style.scss";
interface FavoriteButtonProps {
  character: Character;
}

const FavoriteButton = ({ character }: FavoriteButtonProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    setIsFavorite(favorites.some((fav) => fav.id === character.id));
  }, [character, favorites]);

  const handleButtonClick = () => {
    dispatch(toggleFavorite(character));
  };

  return (
    <button
      onClick={() => handleButtonClick()}
      className={`favorite-button ${isFavorite ? "--active" : "--inactive"}`}
    ></button>
  );
};

export default FavoriteButton;
