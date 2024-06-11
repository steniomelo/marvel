import { useEffect } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../reducers/store';
import { fetchCharacters } from '../../reducers/characters';
import CharacterListHeader from 'components/CharacterList/CharacterListHeader/CharacterListHeader';
import './style.scss';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const characters = useSelector((state: RootState) => state.characters.filteredCharacters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div id="page-home" className='container'>
      <CharacterListHeader />
      <CharacterList characters={characters} />
    </div>
  );
};

export default Home;
