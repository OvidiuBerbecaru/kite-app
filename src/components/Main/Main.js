import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { environment } from '../../environments/environment';

const Main = () => {
  const [cookies] = useCookies(['tokenCookie']);

  useEffect(() => {
    axios
      .get(`${environment.apiPath}/user/${cookies.tokenCookie}`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        if (error.response) {
          // toast("Oups ! Something went wrong");
        }
      });
  }, [cookies])

  return (
    <div className="main">

    </div>
  );
};

export default Main;