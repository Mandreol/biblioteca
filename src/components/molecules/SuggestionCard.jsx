import Img from '../atoms/Img';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import '../../styles/molecules/suggestionCard.css';

const SuggestionCard = ({ IMG_URL, text }) => {
  function handleFuntion() {
    console.log('hola');
  }
  return (
    <div>
      <Img IMG_URL={IMG_URL} />
      <Text text={text} />
      <Button
        buttontext={'Agregar a lista de lectura'}
        handleFuntion={handleFuntion}
      />
    </div>
  );
};

export default SuggestionCard;
