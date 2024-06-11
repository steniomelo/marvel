import './style.scss';

const CharacterCardSkeleton = () => (
  <div className="character-card character-card--skeleton">
    <div className='character-card-img character-card-img--skeleton skeleton' />

    <div className="character-card-title character-card-title--skeleton">
        <div className="character-card-name character-card-name--skeleton skeleton"></div>
        <div className='character-favorite--skeleton skeleton'></div>
    </div>
  </div>
);

export default CharacterCardSkeleton;
