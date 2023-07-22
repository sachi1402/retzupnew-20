import React, { useState } from 'react'
import './HostPage.scss'
import useLocalStorage from '../../hooks/useLocalStorage'
import TypeOfPropert from './Step1/TypeOfPropert';
import TypeOfRoom from './Step2/TypeOfRoom';
import Location from './Step3/Location';
import AllowGuest from './Step4/AllowGuest';
const HostPage = () => {
    const [stepCount, setstepCount] = useState(0);
    const [storedValue, setStoredValue, removeStoredValue] = useLocalStorage('host_data', {});

    const handleUpdate = () => {
        // Update the stored value in local storage
        console.log(storedValue)
        setStoredValue('new value');
      };
    const handleRemove = () => {
        // Remove the key and its value from local storage
        removeStoredValue();
      };


      const increaseCount = () => {
        setstepCount((prevCount) => prevCount + 1);
      };
    
      const decreaseCount = () => {
        setstepCount((prevCount) => prevCount - 1);
      };
    const renderComponent = () => {
        // Based on the count value, render different components
        switch (stepCount) {
          case 0:
            return <TypeOfPropert/>;
          case 1:
            return <TypeOfRoom/>;
          case 2:
            return <Location/>;
          case 3:
            return <AllowGuest/>;
          default:
            return <></>;
        }
      };

  return (
    <div className='host_page_cont'>
        
    <div className="container__host">
      <h1>"Start Hosting Your Unique Space Today - List Now!"</h1>
        {
            renderComponent()
        }
      <div>
      <button onClick={decreaseCount}>Back </button>
      <button onClick={increaseCount}>Next</button>
      </div>
    </div>
      </div>
  )
}





export default HostPage
