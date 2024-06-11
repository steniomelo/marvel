import FilterFavoritesButton from "components/FilterFavoritesButton/FilterFavoritesButton";
import SortButton from "components/SortButton/SortButton";
import { RootState } from "reducers/store";
import { useSelector } from 'react-redux';
import './style.scss';

const CharacterListHeader = () => {

  const total = useSelector((state: RootState) => state.characters.charactersTotal);

  return (
    <div id="character-list-header">
      <div className="character-list-result">
        Encontrados {total} heróis
      </div>
      <SortButton />
      <FilterFavoritesButton />
    </div>
  );
};

export default CharacterListHeader;
