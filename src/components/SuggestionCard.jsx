import useUrlConstructor from '../hooks/useUrlConstructor';
import '../styles/suggestionCard.css';

const URL_BASE = 'https://covers.openlibrary.org/b/';

const SuggestionCard = ({ data }) => {
  // console.log(data.cover_i);
  const IMG_URL = useUrlConstructor(URL_BASE, 'id/', `${data.cover_i}-L.jpg`);
  console.log(IMG_URL);
  return (
    <div className='book-container'>
      <div
        className='cover'
        style={{ backgroundImage: `url(${IMG_URL})` }}
      ></div>

      <p>{data.title}</p>
    </div>
  );
};

export default SuggestionCard;
