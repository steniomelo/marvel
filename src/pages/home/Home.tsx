import { useEffect } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../reducers/store';
import { fetchCharacters, incrementOffset, decrementOffset, } from '../../reducers/characters';
import CharacterListHeader from 'components/CharacterList/CharacterListHeader/CharacterListHeader';
import './style.scss';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const characters = useSelector((state: RootState) => state.characters.filteredCharacters);
  const { offset, limit, charactersTotal } = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div id="page-home" className='container'>
      <CharacterListHeader />
      <CharacterList characters={characters} />
      <div className='pagination'>
        <button onClick={() => dispatch(decrementOffset())} disabled={offset === 0} className="btn">
          Página anterior
        </button>
        <button onClick={() => dispatch(incrementOffset())} disabled={offset + limit >= charactersTotal} className="btn">
          Próxima página
        </button>
      </div>
    </div>
  );
};

export default Home;
