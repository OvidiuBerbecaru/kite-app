import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import axios from 'axios';
import classNames from 'classnames';
import { pathOr } from 'ramda';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuth } from '../../providers/AuthProvider';
import { KiteLogo } from '../../assets/svgAssets';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import { environment } from '../../environments/environment';
import './Login.scss';

const Login = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const { onSignIn } = useAuth();
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onChange',
  });

  const fieldInfo = [
    {
      testId: 'username',
      type: 'text',
      name: 'username',
      label: 'Username',
      icon: <PersonRoundedIcon/>,
      error: pathOr('', ['username', 'message'], errors)
    },
    {
      testId: 'password',
      type: 'password',
      name: 'password',
      label: 'Password',
      icon: <LockRoundedIcon/>,
      error: pathOr('', ['password', 'message'], errors)
    }
  ];

  const onSubmit = (data) => {
    setIsLoading(true);

    axios
      .post(`${environment.apiPath}/login`, data)
      .then((response) => {
        onSignIn(response.data.userId);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          toast("Oups ! Something went wrong");
          setIsLoading(false);
        }
      });
  };

  return (
    <Container className="login text-dark" maxWidth="false">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item xs={10} sm={8} lg={4}>
            <Paper className="login-card pt-4 pr-5 pb-5 pl-5 text-dark" elevation={5}>
              <div className="d-flex justify-content-center w-100 mb-4">
                <KiteLogo />
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {fieldInfo.map((el) => (
                  <Grid key={el.name} container alignItems="flex-end" justify="center">
                    <Grid container item wrap="nowrap" alignItems="flex-end" className="w-75">
                      <Grid item className="pr-2">
                        {el.icon}
                      </Grid>
                      <Grid item xs={12} className="mt-3">
                        <TextField
                          variant="standard"
                          type={el.type}
                          name={el.name}
                          inputRef={ register({
                            required: `${el.name} is required`})
                          }
                          label={el.label}
                          InputLabelProps={{
                            className: 'text-light'
                          }}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    <div
                      className="error text-danger pt-3 w-100 d-flex justify-content-center"
                    >
                      {el.error}
                    </div>
                  </Grid>
                ))}
                <Grid container item wrap="nowrap" justify="center">
                  <Button
                    className={classNames('button mt-5 w-50', {
                      'bg-primary': formState.isValid
                    })}
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={ !formState.isValid || isLoading }
                  >
                    { isLoading
                        ? <div className="w-100 d-flex justify-content-center">
                            <CircularProgress color="inherit" size={20} />
                          </div>
                        : "Login"
                    }
                  </Button>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
