import React, { useState } from 'react'
import './PropertDetaisl.scss'
import  { BsWalletFill } from "react-icons/bs";
import ReactMapGL, { Marker } from 'react-map-gl';
import Card from './Card/Card';
import BedRoom from './BedRoom_card/BedRoom';

import GoogleMapReact from 'google-map-react';

const PropertDetaisl = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
      });
  return (
<div className='world'>
    <nav>Nav</nav>
    <div  className="property__Details__cont">
        <div className="property__Details__cont-title-cont">
            <h1>Jannat 100% Pet Friendly Pool villa with  Lake View</h1>
            <div>
            <p  className="P_sub">rating</p> .
            <p className="P_sub">address</p>
            </div>
        </div>
        <div className="propert__Details__Image-cont">
            <img src="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
            <div className="property__Details__image-grid">
                <img src="https://images.unsplash.com/photo-1549778399-f94fd24d4697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
                <img src="https://images.unsplash.com/photo-1549778399-f94fd24d4697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"  className='lst-top'/>
                <img src="https://images.unsplash.com/photo-1549778399-f94fd24d4697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
                <img src="https://images.unsplash.com/photo-1549778399-f94fd24d4697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className='lst-btm'/>
            </div>
            <button className="P_sub">Show More</button>
        </div>

        <div className="property__Detaisl_host-cont">
            <div className='host-name'>
                <h1 className='H1_main'> Host name </h1>
                <div> 
                    <p className="P_sub">2 guset</p> .
                    <p className="P_sub">2 guset</p> .
                    <p className="P_sub">2 guset</p> .
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"/>
        </div>
        <div className="property_Detaisl_aminities-card">
            <div className="aminityes_card">
                 <h3 className="H"> <BsWalletFill fontSize={'20px'}/>dedicated work place</h3>
                 <p className="P_sub">A room with wifi that’s well suited for working.</p>
            </div>
            <div className="aminityes_card">
                 <h3 className="H"> <BsWalletFill fontSize={'20px'}/>dedicated work place</h3>
                 <p className="P_sub">A room with wifi that’s well suited for working.</p>
            </div>
            <div className="aminityes_card">
                 <h3 className="H"> <BsWalletFill fontSize={'20px'}/>dedicated work place</h3>
                 <p className="P_sub">A room with wifi that’s well suited for working.</p>
            </div>
            <div className="aminityes_card">
                 <h3 className="H"> <BsWalletFill fontSize={'20px'}/>dedicated work place</h3>
                 <p className="P_sub">A room with wifi that’s well suited for working.</p>
            </div>
            
            <Card/>
        </div>  
    
        <div className='property__Detaisl_where-you-will-sleep'> 
            <BedRoom/>
            <BedRoom/>
            <BedRoom/>
            <BedRoom/>
            <BedRoom/>
            <BedRoom/>
            <BedRoom/>
        </div>

    
        <div className='property__Detaisl_Things-toKNow'>
            <div>
                <p>Check-in after 2:00 pm</p>
                <p>Check-in after 2:00 pm</p>
                <p>Check-in after 2:00 pm</p>
                <p>Check-in after 2:00 pm</p>
            </div>
            <div>
                <p>Check-in after 2:00 pm</p>
                <p>Check-in after 2:00 pm</p>
                <p>Check-in after 2:00 pm</p>
                <p>Check-in after 2:00 pm</p>
            </div>
        </div>

    {/* <div style={{ height: '100vh', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div> */}

    </div>
</div>
  )
}

export default PropertDetaisl
