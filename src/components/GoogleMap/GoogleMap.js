import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import '../../styles/utils.scss';
import LocationPin from './LocationPin';
import SpotInfoCard from './SpotInfoCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as R from 'ramda';

const GoogleMap = ({ className, spots, isLoading }) => {
  const [ openedSpot, setOpenedSpot ] = useState({});

  const onSpotClick = (id) => {
    const spot = spots.filter(spot => spot.id === id)[0]
    const { name, country, month, probability, isFavouriteSpot, favSpotId } = spot
    setOpenedSpot({
      lat: Number(spot.lat),
      lng: Number(spot.long),
      name,
      country,
      month,
      probability,
      isFavouriteSpot,
      favSpotId,
      id
    })
  }

  return (
    <div className={`google-map position-relative ${className}`}>
      { isLoading && 
          <div className="spinner position-absolute">
            <CircularProgress 
              color="primary"
            /> 
          </div>
      }
      { !R.isEmpty(openedSpot) &&
        <div className="detailes-card position-absolute">
          <SpotInfoCard {...openedSpot} onClose={() => setOpenedSpot({})} />
        </div>
      }
      <GoogleMapReact
        style= {{opacity: isLoading ? '50%' : null}}
        bootstrapURLKeys={{ key: 'AIzaSyCDQY2Gatxh38awcCqZzSBF-BgwZzV2HVk' }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33
        }}
        center = {
          !R.isEmpty(openedSpot)
            ? { lat: Number(openedSpot.lat), lng: Number(openedSpot.lng)}
            : null
        }
        defaultZoom={1}
      >
        { spots && !isLoading &&
          spots.map(spot => 
            <LocationPin
              key = {spot.id}
              lat={spot.lat}
              lng={spot.long}
              isFavouriteSpot={spot.isFavouriteSpot}
              onClick={onSpotClick}
              id={spot.id}
            />  
          )
        }
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap;