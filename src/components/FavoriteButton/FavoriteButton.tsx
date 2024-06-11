import { Character } from "../../types/character";
import { RootState } from '../../reducers/store';
import { toggleFavorite } from '../../reducers/favorites';
import { useDispatch, useSelector } from 'react-redux';

interface FavoriteButtonProps {
  character: Character
}

const FavoriteButton = ({ character }: FavoriteButtonProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const isFavorite = favorites.some((fav) => fav.id === character.id);

  return (
    <>
      <button onClick={() => dispatch(toggleFavorite(character))}>{isFavorite ? 'Desfavoritar' : 'Favoritar'}</button>
    </>
  );
};

export default FavoriteButton;
