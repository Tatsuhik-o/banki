import { makeStyles } from "@mui/styles";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useContext } from "react";
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
    fontFamily: "Calibri",
    borderRight: "2px solid #F2F6FA",
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
    padding: "50px 0px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    "& a": {
      textDecoration: "none",
    },
  },
  nav_element: {
    width: "100%",
    height: "50px",
    display: "flex",
    gap: "25px",
    "&:hover": {
      backgroundColor: "#F5F7FA",
    },
  },
  active_nav_element: {
    backgroundColor: "#F5F7FA",
  },
  inactive_nav_element: {},
  font: {
    fontSize: "1.3rem",
    minWidth: "25px",
  },
  main_element: {
    display: "flex",
    gap: "12px",
    flex: 1,
    alignItems: "center",
  },
  active: {
    width: "4px",
    height: "100%",
    backgroundColor: "#1814F3",
    borderTopRightRadius: "25px",
    borderBottomRightRadius: "25px",
  },
  inactive: {
    width: "4px",
    height: "100%",
    backgroundColor: "transparent",
    borderTopRightRadius: "25px",
    borderBottomRightRadius: "25px",
  },
  link_name: {
    textTransform: "capitalize",
    textDecoration: "none",
    fontSize: "1.3rem",
    color: "#B1B1B1",
    fontStyle: "italic",
  },
  active_element: {
    color: "#1814F3",
  },
  inactive_element: {
    color: "#6B7280",
  },
  nav_element_mobile: {
    width: "100%",
    height: "50px",
    display: "flex",
    "&:hover": {
      backgroundColor: "#F5F7FA",
    },
  },
  main_element_mobile: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Sidebar() {
  const { mobileView } = useContext(mobileContext) || { mobileView: false };
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
          return !mobileView ? (
            <NavLink to={navElement.name} key={idx}>
              <div
                className={`${classes.nav_element} ${
                  currentPath === navElement.name
                    ? classes.active_nav_element
                    : classes.inactive_nav_element
                }`}
              >
                <div
                  className={
                    currentPath === navElement.name
                      ? classes.active
                      : classes.inactive
                  }
                ></div>
                <div className={classes.main_element}>
                  <div
                    className={`${classes.font} ${
                      currentPath === navElement.name
                        ? classes.active_element
                        : classes.inactive_element
                    }`}
                  >
                    <FontAwesomeIcon icon={navElement.icon} />
                  </div>
                  <div
                    className={`${classes.link_name} ${
                      currentPath === navElement.name
                        ? classes.active_element
                        : classes.inactive_element
                    }`}
                  >
                    {navElement.name}
                  </div>
                </div>
              </div>
            </NavLink>
          ) : (
            <NavLink to={navElement.name} key={idx}>
              <div
                className={`${classes.nav_element_mobile} ${
                  currentPath === navElement.name
                    ? classes.active_nav_element
                    : classes.inactive_nav_element
                }`}
              >
                <div
                  className={
                    currentPath === navElement.name
                      ? classes.active
                      : classes.inactive
                  }
                ></div>
                <div className={classes.main_element_mobile}>
                  <div
                    className={`${classes.font} ${
                      currentPath === navElement.name
                        ? classes.active_element
                        : classes.inactive_element
                    }`}
                  >
                    <FontAwesomeIcon icon={navElement.icon} />
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
