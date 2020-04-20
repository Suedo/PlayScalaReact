import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Switch, Button, useTheme } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./Navbar.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface NavbarProps {
  darkmode: boolean;
  themeChange: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ darkmode, themeChange }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className="parent">
            <div className="child">
              <Button variant="contained" color="primary">
                <Typography color="textPrimary">
                  <Link to="/home">Home</Link>
                </Typography>
              </Button>{" "}
              {/* no more page refresh */}
              <Button variant="contained" color="primary">
                <Typography color="textPrimary">
                  <Link to="/execute">Execute</Link>
                </Typography>
              </Button>
            </div>
            <Switch checked={darkmode} onChange={themeChange}></Switch>
            <Button variant="contained" color="primary">
              <Typography color="textPrimary">Login</Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
