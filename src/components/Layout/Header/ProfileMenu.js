import { Menu, MenuItem } from "@material-ui/core";
import { Person as AccountIcon } from "@material-ui/icons";
import classNames from "classnames";
import React, { useState } from "react";
import { signOut } from "../../context/UserContext";
import { Typography } from "../Wrappers/Wrappers";
import useStyles from "./styles";
import { useUserDispatch } from "../../context/UserContext";

export default function ProfileMenu(props) {
    var classes = useStyles();
    var userDispatch = useUserDispatch();
    var [profileMenu, setProfileMenu] = useState(null);
    return (
        <div>
            <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium">
              John Smith
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              component="a"
              color="primary"
              href="https://flatlogic.com"
            >
              Flalogic.com
            </Typography>
          </div>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Profile
          </MenuItem>
          <div className={classes.profileMenuUser}>
            <Typography
              className={classes.profileMenuLink}
              color="primary"
              onClick={() => signOut(userDispatch, props.history)}
            >
              Sign Out
            </Typography>
          </div>
        </Menu>
        </div>
    )
}
