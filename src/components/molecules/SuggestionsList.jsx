import ListElement from '../atoms/ListElement';
import { UnorderedList } from '@chakra-ui/react';

const SuggestionsList = ({ filterData, param }) => {
  return (
    <UnorderedList>
      {filterData?.map((e, i) => (
        <ListElement key={i} data={e} param={param} />
      ))}
    </UnorderedList>
  );
};

export default SuggestionsList;
