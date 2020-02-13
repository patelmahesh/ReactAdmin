import { Drawer, IconButton, List } from "@material-ui/core";
import { ArrowBack as ArrowBackIcon, BorderAll as TableIcon, FilterNone as UIElementsIcon, FormatSize as TypographyIcon, Home as HomeIcon, NotificationsNone as NotificationsIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { toggleSidebar, useLayoutDispatch, useLayoutState } from "../../../context/LayoutContext";
import SidebarLink from "./SidebarLink";
import useStyles from "./styles";


const structure = [
  { id: 0, label: "Dashboard", link: "/app/sample/dashboard", icon: <HomeIcon /> },
  {
    id: 1,
    label: "Typography",
    link: "/app/sample/typography",
    icon: <TypographyIcon />,
  },
  { id: 2, label: "Tables", link: "/app/sample/tables", icon: <TableIcon /> },
  {
    id: 3,
    label: "Notifications",
    link: "/app/sample/notifications",
    icon: <NotificationsIcon />,
  },
  {
    id: 4,
    label: "UI Elements",
    link: "/app/sample/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/app/sample/ui/icons" ,icon: <TableIcon /> },
      { label: "Charts", link: "/app/sample/ui/charts" },
      { label: "Maps", link: "/app/sample/ui/maps" },
    ],
  },
  { id: 5, type: "divider" },
  {
    id: 6,
    label: "Form ",
    link: "/app/sample/form",
    icon: <TypographyIcon />,
  },{
    id: 7,
    label: "UI Elements",
    link: "/app/sample/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "Icons", link: "/app/sample/ui/icons" ,icon: <TableIcon /> },
      { label: "Charts", link: "/app/sample/ui/charts" },
      { label: "Maps", link: "/app/sample/ui/maps" },
    ],
  },,
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
