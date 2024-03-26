import ListElement from '../atoms/ListElement';

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
