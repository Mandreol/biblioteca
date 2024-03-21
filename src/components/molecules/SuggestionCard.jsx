import Img from '../atoms/Img';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import '../../styles/moleculessuggestionCard.css';

const SuggestionCard = ({ IMG_URL, text }) => {
  function handleFuntion() {}
  return (
    <container>
      <Img IMG_URL={IMG_URL} />
      <Text text={text} />
      <Button buttontext={buttontext} handleFuntion={handleFuntion} />
    </container>
  );
};

export default SuggestionCard;
