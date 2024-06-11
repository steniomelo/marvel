import { useDispatch, useSelector } from 'react-redux';
import { setSortOrder } from '../../reducers/characters';
import { RootState } from '../../reducers/store';
import Heroi from '../../assets/ic_heroi.svg';
import './style.scss';

const SortButton = () => {
  const dispatch = useDispatch();
  const sortOrder = useSelector((state: RootState) => state.characters.sortOrder);

  return (
    <div id="sortby">
      <img src={Heroi} alt="Ícone de um super herói" />
      <p className='sortby-text'>Ordenar por nome - A/Z</p>

      <button onClick={() => dispatch(setSortOrder(sortOrder === 'name' ? 'modified' : 'name'))} className={`sortby-button ${sortOrder}`}>
        
      </button>
    </div>
  );
};

export default SortButton;
