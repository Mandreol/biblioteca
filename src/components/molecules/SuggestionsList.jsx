import ListElement from '../atoms/ListElement';
import '../../styles/molecules/suggestionsList.css';

const SuggestionsList = ({ data, param, handlSetectedInput }) => {
  return (
    <div>
      {data?.map((e, i) => (
        <ListElement
          key={i}
          data={e}
          param={param}
          handlSetectedInput={handlSetectedInput}
        />
      ))}
    </div>
  );
};

export default SuggestionsList;
