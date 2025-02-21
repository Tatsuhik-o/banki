import { makeStyles } from "@mui/styles";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { mobileContext } from "../../utils/context";
import { nav_bar } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  sidebar: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    fap: "25px",
  },
  logo: {
    height: "75px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      height: "100%",
      objectFit: "cover",
    },
  },
  nav_bar: {
    padding: "25px 0px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  nav_element: (props) => ({
    width: "100%",
    height: "50px",
    display: "flex",
    gap: !props.mobileView ? "25px" : "5px",
  }),
  main_element: {
    display: "flex",
    gap: "10px",
    flex: 1,
    alignItems: "center",
  },
  font: {
    color: "#B1B1B1",
    fontSize: "1.3rem",
  },
  active: {
    width: "4px",
    backgroundColor: "#1814F3",
    borderTopRightRadius: "12px",
    borderBottomRightRadius: "12px",
  },
  inactive: {
    width: "4px",
    backgroundColor: "transparent",
    borderTopRightRadius: "12px",
    borderBottomRightRadius: "12px",
  },
  link_name: {
    textTransform: "capitalize",
    textDecoration: "none",
    fontSize: "1.3rem",
    color: "#B1B1B1",
  },
});

export default function Sidebar() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView });
  const currentPath = useLocation().pathname.substring(1) || "Dashboard";

  return (
    <div className={classes.sidebar}>
      <Link to={"/"}>
        <div className={classes.logo}>
          {!mobileView && <img src="logo.png" alt="" />}
          {mobileView && <img src="logo_mobile.png" alt="" />}
        </div>
      </Link>
      <div className={classes.nav_bar}>
        {nav_bar.map((navElement, idx) => {
          return (
            <NavLink to={navElement.name} key={idx}>
              <div className={classes.nav_element}>
                <div
                  className={
                    currentPath === navElement.name
                      ? classes.active
                      : classes.inactive
                  }
                ></div>
                <div className={classes.main_element}>
                  <div className={classes.font}>
                    <FontAwesomeIcon icon={navElement.icon} />
                  </div>
                  {!mobileView && (
                    <div className={classes.link_name}>{navElement.name}</div>
                  )}
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
