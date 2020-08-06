import React from 'react';
import axios from 'axios';
import { environment } from '../../environments/environment';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import './SpotInfoCard.scss';
import { useRefetch } from '../../providers/RefetchProvider';
import { toast } from 'react-toastify';
import '../../styles/utils.scss';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const SpotInfoCard = ({
  lat, lng, name, country, month, probability, isFavouriteSpot, onClose, favSpotId, id
}) => {

  const { onRefetchToggle } = useRefetch();

  const deleteFavouriteSpot = () => {
    axios
    .delete(`${environment.apiPath}/favourites/${favSpotId}`)
    .then(() => {
      onRefetchToggle();
      toast.success("Spot deleted from favourites");
      onClose();
    })
    .catch((error) => {
      if (error.response) {
        toast.error("Oups ! Something went wrong");
        console.log(error.response);
      }
    });
  }

  const addFavouriteSpot = () => {
    axios
    .post(`${environment.apiPath}/favourites`, { spot: Number(id)})
    .then(() => {
      onRefetchToggle();
      toast.success("Spot added to favourites");
      onClose();
    })
    .catch((error) => {
      if (error.response) {
        toast.error("Oups ! Something went wrong");
        console.log(error.response);
      }
    });
  }

  return(
    <Card className="spot-info-card d-flex flex-column p-3" variant="outlined">
      <div className="w-100 d-flex justify-content-between">
        <h2>{name}</h2>
        <div onClick={onClose} className="c-pointer">
          <CloseRoundedIcon/>
        </div>
      </div>
      <h5>{country}</h5>
      <div className="w-100 d-flex mt-2 justify-content-between align-items-center">
        <p>WIND PROBABILITY</p>
        <p>{probability}</p>
      </div>
      <div className="w-100 d-flex mt-2 justify-content-between align-items-center">
        <p>LATITUDE</p>
        <p>{lat}</p>
      </div>
      <div className="w-100 d-flex mt-2 justify-content-between align-items-center">
        <p>LONGITUDE</p>
        <p>{lng}</p>
      </div>
      <div className="w-100 d-flex mt-2 justify-content-between align-items-center">
        <p>WHEN TO GO</p>
        <p>{month}</p>
      </div>
      <Button
        className="bg-primary mt-3"
        color="primary"
        onClick={isFavouriteSpot ? deleteFavouriteSpot : addFavouriteSpot}
      >
        { <span className="text-white">
            {isFavouriteSpot ? "Remove From Favourites" : "Add To Favourites"}
          </span>
        }
      </Button>
    </Card>
  )
}

export default SpotInfoCard;