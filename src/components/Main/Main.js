import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import axios from 'axios';
import * as R from 'ramda';
import { environment } from '../../environments/environment';
import NavBar from '../NavBar/NavBar';
import GoogleMap from '../GoogleMap/GoogleMap';
import { useRefetch } from '../../providers/RefetchProvider'

const Main = () => {
  const [cookies] = useCookies(['tokenCookie']);
  const [userData, setUserData] = useState({});
  const [spots, setSpots] = useState([]);
  const [favouriteSpots, setFavouriteSpots] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const { refetch } = useRefetch();

  useEffect(() => {
    axios
      .get(`${environment.apiPath}/user/${cookies.tokenCookie}`)
      .then((response) => {
        setUserData(response);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Oups ! We couldn't get your user info");
        }
      });

  }, [cookies])

  useEffect(() => {
    axios
      .get(`${environment.apiPath}/favourites`)
      .then((response) => {
        setIsLoading(true);
        setFavouriteSpots(
          R.uniq(response.data.map(
            spot => ({
              spot: spot.spot.toString(),
              favId: spot.id 
            })
          ))
        )
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Oups ! We couldn't get your favourites spots");
          setIsLoading(false);
        }
    });
  }, [refetch])

  useEffect(() => {
    axios
    .get(`${environment.apiPath}/spot`)
    .then((response) => {
      const spots = response.data.map(spot => (
        R.isEmpty(favouriteSpots.filter(favSpot => favSpot.spot === spot.id))
          ? spot
          : { ...spot,
              isFavouriteSpot: true,
              favSpotId: favouriteSpots.filter(favSpot => favSpot.spot === spot.id)[0].favId
            }
      ))
      setTimeout(() => setIsLoading(false), 2000)
      // setIsLoading(false);
      setSpots(spots);
    })
    .catch((error) => {
      if (error.response) {
        toast.error("Oups ! We couldn't get the spots");
        setIsLoading(false);
      }
    });
  }, [favouriteSpots])

  return (
    <div className="main d-flex flex-wrap justify-content-center">
      <NavBar userInfo={userData} />
        <GoogleMap spots={spots} isLoading={isLoading}/>
    </div>
  );
};

export default Main;