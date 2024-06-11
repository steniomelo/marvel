import { RootState } from '../../reducers/store';
import { toggleShowFavorites } from '../../reducers/characters';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';


const FilterFavoritesButton = () => {
    const dispatch = useDispatch();
    const showFavorites = useSelector((state: RootState) => state.characters.showFavorites);

    const handleButton = () => {
        dispatch(toggleShowFavorites());
    };

    return (
        <button id="favorite-toggle" onClick={() => handleButton()} className={`${showFavorites ? '--active' : '--inactive'}`}>
            Somente favoritos
        </button>
    );
};

export default FilterFavoritesButton;
