import ListElement from '../atoms/ListElement';
import { UnorderedList } from '@chakra-ui/react';

const SuggestionsList = ({ filterData, accion }) => {
  return (
    <UnorderedList>
      {filterData?.map((e, i) => (
        <ListElement key={i} data={e} accion={accion} />
      ))}
    </UnorderedList>
  );
};

export default SuggestionsList;
