import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterDetails, fetchCharacterComics } from '../../services/api';
import { Character } from '../../types/character';
import { Comic } from '../../types/comic';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import IconComics from '../../assets/ic_quadrinhos.svg';
import IconFilmes from '../../assets/ic_trailer.svg';
import './style.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers/store';

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    // fetchCharacterDetails(Number(id)).then(response => {
    //   setCharacter(response.data.data.results[0]);
    //   setLoading(false);
    // });
    // fetchCharacterComics(Number(id)).then(response => {
    //   setComics(response.data.data.results);
    // });

    Promise.all([fetchCharacterDetails(Number(id)), fetchCharacterComics(Number(id))]).then((response) => {
      console.log(response);
      setCharacter(response[0].data.data.results[0]);
      setComics(response[1].data.data.results);
      setLoading(false);
    });


  }, [id]);

  const FormatDate = (date: string) => {
    const formattedDate = format(new Date(date), "dd MMM yyyy", { locale: ptBR });
    return formattedDate;
  };

  return (
    <div className='container'>
      {loading && (
        <>
          <div id='character-detail'>
            <div className='detail-text'>
              <div className="character-header">
                <div className='character-name skeleton'></div>   
              </div>
              <p className='character-description'>
                <span className="skeleton"></span>
                <span className="skeleton"></span>
                <span className="skeleton"></span>
                <span className="skeleton"></span>
                <span className="skeleton"></span>
              </p>

            </div>

            <div className='detail-image skeleton'></div>

          </div>

          
        </>
      )}
      {(character && comics.length > 0) && (
        <>
          <div id='character-detail'>
            <div className='detail-text'>
              <div className="character-header">
                <h1 className='character-name'>{character.name}
                  <span>{character.name}</span>
                </h1>
                <FavoriteButton character={character} />
              </div>
              <p className='character-description'>{character.description}</p>

              <div className="character-metas">
                <div className="meta-comics character-meta">
                  <h5>Quadrinhos</h5>
                  <div className='character-meta-icon'>
                    <img src={IconComics} alt="" />
                    {character.comics.available}
                  </div>
                </div>
                <div className="meta-movies character-meta">
                  <h5>Filmes</h5>
                  <div className='character-meta-icon'>
                    <img src={IconFilmes} alt="" />
                    {character.events.available}
                  </div>
                </div>
              </div>

              <div className='character-rating'>
                Rating: 
              </div>

              <div className="character-last-comic">
                <strong>Último quadrinho: </strong>
                <span>{FormatDate(comics[0].dates[0].date)}</span>
              </div>
            </div>

            <div className='detail-image'>
              <img src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`} alt={character.name} />
            </div>

          </div>

          <div id="character-comics">
            <h2 id="character-comics-title">Últimos lançamentos</h2>
            <div className='comics-list'>
              {comics.map(comic => (
                <div className='comic' key={comic.id}>
                  <img src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`} alt={comic.title} className='comic-image' />
                  <p className='comic-title'>{comic.title}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterDetail;
