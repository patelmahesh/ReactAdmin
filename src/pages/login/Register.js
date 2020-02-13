import { Button, CircularProgress, Fade, TextField, Typography } from "@material-ui/core";
import classnames from "classnames";
import React, { useState } from "react";
import { loginUser, useUserDispatch } from "../../context/UserContext";
import google from "../../assets/images/google.svg";
import useStyles from "./styles";

export default function Register(props) {
  var classes = useStyles();
  var userDispatch = useUserDispatch();

  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [nameValue, setNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");

  return (
    <React.Fragment>
      <Fade in={error}>
        <Typography color="secondary" className={classes.errorMessage}>
          Something is wrong with your login or password :(
        </Typography>
      </Fade>
      <Typography variant="h1" className={classes.greeting}>
        Welcome!
      </Typography>
      <Typography variant="h2" className={classes.subGreeting}>
        Create your account
      </Typography>
      <Fade in={error}>
        <Typography color="secondary" className={classes.errorMessage}>
          Something is wrong with your login or password :(
        </Typography>
      </Fade>
      <TextField
        id="name"
        value={nameValue}
        onChange={e => setNameValue(e.target.value)}
        margin="normal"
        label="Full Name"
        type="email"
        fullWidth
      />
      <TextField
        id="email"
        value={loginValue}
        onChange={e => setLoginValue(e.target.value)}
        margin="normal"
        label="Email Adress"
        type="email"
        fullWidth
      />
      <TextField
        id="password"
        value={passwordValue}
        onChange={e => setPasswordValue(e.target.value)}
        margin="normal"
        label="Password"
        type="password"
        fullWidth
      />
      <div className={classes.creatingButtonContainer}>
        {isLoading ? (
          <CircularProgress size={26} />
        ) : (
          <Button
            onClick={() =>
              loginUser(
                userDispatch,
                loginValue,
                passwordValue,
                props.history,
                setIsLoading,
                setError,
              )
            }
            disabled={
              loginValue.length === 0 ||
              passwordValue.length === 0 ||
              nameValue.length === 0
            }
            size="large"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.createAccountButton}
          >
            Create your account
          </Button>
        )}
      </div>
      <div className={classes.formDividerContainer}>
        <div className={classes.formDivider} />
        <Typography className={classes.formDividerWord}>or</Typography>
        <div className={classes.formDivider} />
      </div>
      <Button
        size="large"
        className={classnames(
          classes.googleButton,
          classes.googleButtonCreating,
        )}
      >
        <img src={google} alt="google" className={classes.googleIcon} />
        &nbsp;Sign in with Google
      </Button>
    </React.Fragment>
  );
}
