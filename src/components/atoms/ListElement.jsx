import '../../styles/atoms/listElement.css';
const ListElement = ({ data, param, handlSetectedInput }) => {
  const handleSelect = () => {
    handlSetectedInput(data);
  };

  return (
    <li className='list' onClick={handleSelect}>
      {data[param]}
    </li>
  );
};

export default ListElement;
