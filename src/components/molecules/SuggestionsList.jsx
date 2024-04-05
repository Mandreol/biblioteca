import ListElement from '../atoms/ListElement';
import { UnorderedList } from '@chakra-ui/react';

const SuggestionsList = ({ filterData }) => {
  return (
    <UnorderedList>
      {filterData?.map((e, i) => (
        <ListElement key={i} data={e} />
      ))}
    </UnorderedList>
  );
};

export default SuggestionsList;
