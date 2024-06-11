import { useDispatch } from 'react-redux';
import { setSearch } from '../../reducers/characters';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (searchTerm: string) => {
    const delay = setTimeout(() => {
      dispatch(setSearch(searchTerm))
      navigate("/");
    }, 500);
    return () => clearTimeout(delay);
  };

  return (
    <input
      type="text"
      placeholder="Procure por heróis"
      onChange={(e) => handleSearch(e.target.value)}
      id='searchbar'
    />
  );
};

export default SearchBar;