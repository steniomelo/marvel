import { RootState } from '../../reducers/store';
import { toggleShowFavorites } from '../../reducers/characters';
import { useDispatch, useSelector } from 'react-redux';


const FilterFavoritesButton = () => {
    const dispatch = useDispatch();
    const showFavorites = useSelector((state: RootState) => state.characters.showFavorites);

    return (
        <button onClick={() => dispatch(toggleShowFavorites())}>
            {showFavorites ? 'Show All' : 'Show Favorites'}
        </button>
    );
};

export default FilterFavoritesButton;
