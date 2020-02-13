import { Button, CircularProgress, Fade, Grid, Paper, Tab, Tabs, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Layout/Footer";
import { loginUser, useUserDispatch } from "../../context/UserContext";
import Register from "./Register";

import useStyles from "./styles";

function Login(props) {
  var classes = useStyles();
  var userDispatch = useUserDispatch();
  
  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");

  return (
    <Grid container className={classes.container}>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Paper elevation={3} className={classes.paper} square="true">
            <Tabs
              value={activeTabId}
              onChange={(e, id) => setActiveTabId(id)}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Login" classes={{ root: classes.tab }} />
              {/*<Tab label="New User" classes={{ root: classes.tab }} />*/}
              <Tab label="New User" classes={{ root: classes.tab }} />
            </Tabs>
            {activeTabId === 0 && (
              <React.Fragment>
                <Fade in={error}>
                  <Typography
                    color="secondary"
                    className={classes.errorMessage}
                  >
                    Something is wrong with your login or password :(
                  </Typography>
                </Fade>
                <TextField
                  id="email"
                  required
                  value={loginValue}
                  onChange={e => setLoginValue(e.target.value)}
                  label="Email Adress"
                  type="email"
                  fullWidth
                />
                <TextField
                  id="password"
                  required
                  value={passwordValue}
                  onChange={e => setPasswordValue(e.target.value)}
                  margin="normal"
                  label="Password"
                  type="password"
                  fullWidth
                />
                <div className={classes.formButtons}>
                  {isLoading ? (
                    <CircularProgress
                      size={26}
                      className={classes.loginLoader}
                    />
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
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Login
                    </Button>
                  )}
                  <Button
                    color="primary"
                    size="large"
                    className={classes.forgetButton}
                  >
                    Forget Password
                  </Button>
                </div>
              </React.Fragment>
            )}
            {activeTabId === 1 && <Register></Register>}
          </Paper>
        </div>
        <Footer></Footer>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
