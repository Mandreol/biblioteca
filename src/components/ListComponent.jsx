import React from 'react';
import '../styles/listComponent.css';
const ListComponent = ({ data, param, handlSetectedInput }) => {
  const handleSelect = () => {
    handlSetectedInput(data);
  };

  return (
    <li className='list' onClick={handleSelect}>
      {data[param]}
    </li>
  );
};

export default ListComponent;
