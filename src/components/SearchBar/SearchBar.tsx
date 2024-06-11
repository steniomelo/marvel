import { useDispatch } from 'react-redux';
import { setSearch } from '../../reducers/characters';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import { useEffect, useState } from 'react';

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(setSearch(searchTerm))
      navigate("/");
    }, 500);
    return () => clearTimeout(delay);
  }, [searchTerm, dispatch]);

  return (
    <input
      type="text"
      placeholder="Procure por heróis"
      onChange={(e) => setSearchTerm(e.target.value)}
      id='searchbar'
    />
  );
};

export default SearchBar;