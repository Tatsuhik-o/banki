import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { mobileContext } from "../../utils/context";
import { nav_bar } from "../../utils/constants";
const useStyles = makeStyles({
  sidebar: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  logo: {},
  nav_bar: {},
});

export default function Sidebar() {
  const classes = useStyles();
  const { mobileView } = useContext(mobileContext) || {};
  console.log(mobileView);
  console.log(nav_bar);
  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>
        <img src="" alt="" />
      </div>
      <div className={classes.nav_bar}></div>
    </div>
  );
}
