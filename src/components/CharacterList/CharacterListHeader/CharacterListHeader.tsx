import FilterFavoritesButton from "components/FilterFavoritesButton/FilterFavoritesButton";
import SortButton from "components/SortButton/SortButton";
import { RootState } from "reducers/store";
import { useSelector } from 'react-redux';
import './style.scss';

const CharacterListHeader = () => {

  const { charactersTotal, search, showFavorites } = useSelector((state: RootState) => state.characters);

  return (
    <div id="character-list-header">
      {(charactersTotal > 0) ? (
        <>
          <div className="character-list-result">
            {`Encontrados ${charactersTotal} heróis`}
          </div>
          <SortButton />
          <FilterFavoritesButton />
        </>
      ) : (
            
          <div className="character-list-result text-center">
          {`Não encontramos nenhum herói com o termo "${search}"`}
        </div>
        
      )}        
    </div>
  );
};

export default CharacterListHeader;
