import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import './Location.scss';
import useLocalStorage from '../../../hooks/useLocalStorage';
function Location() {
  const [storedValue, setStoredValue, removeStoredValue] = useLocalStorage('host_data', {});

  const [address, setAddress] = useState({
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    city: '',
    state: '',
    country: '',
    pinCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(address);
    if (!storedValue.addres) {
      // If 'type_of_room' key is not present, create it and set its value
      setStoredValue({ addres: address });
    } else {
      // If 'type_of_room' key is present, update its value
      console.log('no p', );
      setStoredValue({ addres: address});
    }
  };

  const handleMapClick = (e) => {
    const latitude = e.latLng.lat();
    const longitude = e.latLng.lng();
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
  };

  const MapComponent = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        onClick={handleMapClick}
      >
        <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
      </GoogleMap>
    ))
  );

  return (
    <div>
      <h2>Location</h2>
      <div className="mapInput">
          <MapComponent
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '400px', width: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Address Line 1:
          <input type="text" name="addressLine1" value={address.addressLine1} onChange={handleInputChange} />
        </label>
        <label>
          Address Line 2:
          <input type="text" name="addressLine2" value={address.addressLine2} onChange={handleInputChange} />
        </label>
        <label>
          Address Line 3:
          <input type="text" name="addressLine3" value={address.addressLine3} onChange={handleInputChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={address.city} onChange={handleInputChange} />
        </label>
        <label>
          State:
          <input type="text" name="state" value={address.state} onChange={handleInputChange} />
        </label>
        <label>
          Country:
          <input type="text" name="country" value={address.country} onChange={handleInputChange} />
        </label>
        <label>
          Pin/Zip Code:
          <input type="text" name="pinCode" value={address.pinCode} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Location;
