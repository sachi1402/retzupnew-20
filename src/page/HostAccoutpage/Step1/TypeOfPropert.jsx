import React from 'react';
import './TypeOfPropert.scss';
import { RiHome2Line, RiBuilding2Line, RiHotelBedLine } from 'react-icons/ri';
import useLocalStorage from '../../../hooks/useLocalStorage';

function TypeOfPropert() {
  const [storedValue, setStoredValue, removeStoredValue] = useLocalStorage('host_data', {});

  const homes = [
    { name: 'Home', icon: <RiHome2Line /> },
    { name: 'Building', icon: <RiBuilding2Line /> },
    { name: 'Hotel Bed', icon: <RiHotelBedLine /> },
  ];

  let handleClick = (k) => {
    console.log(k, 'clicked');

    if (!storedValue.type_of_home) {
      // If 'type_of_home' key is not present, create it and set its value
      console.log('p');
      setStoredValue({ type_of_home: homes[k].name });
    } else {
      // If 'type_of_home' key is present, update its value
      console.log('no p',storedValue);
      setStoredValue(
          {type_of_home: homes[k].name});
        
    }
  };

  return (
    <div className="TypeOfPropert">
      {homes.map((e, key) => (
        <div key={key} onClick={() => handleClick(key)}>
          {e.icon}
          <p>{e.name}</p>
          55
        </div>
      ))}
    </div>
  );
}

export default TypeOfPropert;
