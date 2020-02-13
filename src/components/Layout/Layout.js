import classnames from "classnames";
import React from "react";
import { Paper } from "@material-ui/core";

import { withRouter } from "react-router-dom";
import { useLayoutState } from "../../context/LayoutContext";

import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import Footer from "../Layout/Footer";

import useStyles from "./styles";
import routes from "../../routes";

function Layout(props) {
  var classes = useStyles();
  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div className={classnames(classes.content, {[classes.contentShift]: layoutState.isSidebarOpened,})}>
          <Paper elevation={1} className={classes.papper}>
            {routes}
            <Footer></Footer>
          </Paper>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
