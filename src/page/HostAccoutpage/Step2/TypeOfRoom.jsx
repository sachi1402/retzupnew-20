import React from 'react';
import './TypeOfRoom.scss';
// import {  RiCupLine } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';

import useLocalStorage from '../../../hooks/useLocalStorage';

function TypeOfRoom() {
  const [storedValue, setStoredValue, removeStoredValue] = useLocalStorage('host_data', {});

  const rooms = [
    { name: 'Bedroom', icon: <FaHome/> },
    { name: 'Kitchen', icon: <FaHome/> },
    { name: 'Bathroom', icon: <FaHome/> },
  ];

  let handleClick = (k) => {
    console.log(k, 'clicked');

    if (!storedValue.type_of_room) {
      // If 'type_of_room' key is not present, create it and set its value
      setStoredValue({ type_of_room: rooms[k].name });
    } else {
      // If 'type_of_room' key is present, update its value
      console.log('no p', storedValue);
      setStoredValue({ type_of_room: rooms[k].name });
    }
  };

  return (
    <div className="TypeOfRoom">
      {rooms.map((e, key) => (
        <div key={key} onClick={() => handleClick(key)}>
          {e.icon}
          <p>{e.name}</p>
          55
        </div>
      ))}
    </div>
  );
}

export default TypeOfRoom;
