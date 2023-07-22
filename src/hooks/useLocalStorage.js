import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue = {}) => {
  // Get the initial value from local storage, if available
  const storedValue = localStorage.getItem(key);

  // Set the initial state to the stored value or the provided initial value
  const [value, setValue] = useState(() => {
    const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;
    return parsedValue;
  });

  // Function to update the state value and store it in local storage
  const updateValue = (newValue) => {
      console.log(newValue,'it');
    setValue((prevValue) => {
      const updatedValue = { ...prevValue, ...newValue };
      localStorage.setItem(key, JSON.stringify(updatedValue));
      return updatedValue;
    });
  };

  // Function to remove the key and its value from local storage
  const removeValue = () => {
    setValue(initialValue);
    localStorage.removeItem(key);
  };

  return [value, updateValue, removeValue];
};

export default useLocalStorage;
