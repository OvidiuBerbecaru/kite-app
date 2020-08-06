import React from 'react';
import { KiteLogo } from '../../assets/svgAssets';
import { useAuth } from '../../providers/AuthProvider';
import { Button } from '@material-ui/core';
import './NavBar.scss';

const NavBar = ({ userInfo }) => {
  const { onSignOut } = useAuth();

  return (
    <div className="navbar w-100 d-flex justify-content-between">
      <KiteLogo />
      <div className="navbar-right d-flex align-items-center">
        <span className="name">{userInfo.data?.name}</span>
        <Button
            className="logout bg-primary"
            type="submit"
            variant="contained"
            color="primary"
            onClick={onSignOut}
          >
            Log Out
        </Button>
      </div>
    </div>
  );
};

export default NavBar;