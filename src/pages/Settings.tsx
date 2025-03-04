import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

const useStyles = makeStyles({
  settings_wrapper: {
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "calc(100% - 1rem)" : "cacl(100% - 4rem)",
    padding: "2rem",
    margin: (props: { mobileView: boolean }) =>
      props.mobileView ? "0.5rem" : "2rem",
    backgroundColor: "#FFFFFF",
    borderRadius: (props: { mobileView: boolean }) =>
      props.mobileView ? "8px" : "16px",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  nav_links: {
    width: "100%",
    borderBottom: "1px solid #F4F5F7",
    display: "flex",
    gap: (props: { mobileView: boolean }) =>
      props.mobileView ? "20px" : "45px",
    "& > a": {
      color: "#718EBF",
      textDecoration: "none",
      fontFamily: "Source Code Pro",
      fontSize: "0.85rem",
      height: "100%",
      padding: "0.5rem",
    },
    "& > a.active": {
      color: "#3531F5",
      borderBottom: "2px solid #3531F5",
    },
  },
});

export default function Settings() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.settings_wrapper}>
      <div className={classes.nav_links}>
        <NavLink to={"edit"}>{mobileView ? "Edit" : "Edit Profile"}</NavLink>
        <NavLink to={"preference"}>Preferences</NavLink>
        <NavLink to={"security"}>Security</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
