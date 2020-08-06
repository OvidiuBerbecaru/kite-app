import React from 'react'
import RoomIcon from '@material-ui/icons/Room';
import './GoogleMap.scss';

const LocationPin = ({ text, isFavouriteSpot, id, onClick }) => (
  <div className="pin" onClick={() => onClick(id)}>
    <RoomIcon fontSize="large" color={ isFavouriteSpot ? 'error' : 'action' }/>
    <p className="pin-text">{text}</p>
  </div>
)

export default LocationPin;