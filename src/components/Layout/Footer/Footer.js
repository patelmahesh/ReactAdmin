import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";


export default function Footer() {
var classes = useStyles();
  return (
    <div>
        <Typography className={classes.copyright} >
          Copyright © 2014-2019  All rights reserved.
        </Typography>
    </div>
  );
}
