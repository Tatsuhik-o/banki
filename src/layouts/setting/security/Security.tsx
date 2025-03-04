import { makeStyles } from "@mui/styles";
import { mobileContext } from "../../../utils/context";
import { useContext } from "react";
import Toggle from "../../../components/Toggle";

const useStyles = makeStyles({
  security: {
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "100%" : "90%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignSelf: "center",
    paddingTop: "1rem",
  },
  two_factor: {
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "100%" : "50%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontFamily: "Source Code Pro",
  },
  edit_password: {
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "100%" : "50%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  label_password: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    fontFamily: "Source Code Pro",
  },
  pass_case: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    "& label": {
      fontFamily: "Source Code Pro",
      fontSize: "0.8rem",
      color: "#A4B6D3",
    },
    "& input": {
      color: "#7A95C3",
      padding: "0.5rem",
      border: "1px solid #E7EFF5",
      borderRadius: "8px",
    },
  },
});

export default function Security() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.security}>
      <div className={classes.two_factor}>
        <label>Two-Factor Notifications</label>
        <Toggle isItOn={true} />
      </div>
      <div className={classes.edit_password}>
        <div className={classes.label_password}>
          <label>Change Password</label>
          <div className={classes.pass_case}>
            <label>Current Password</label>
            <input type="password" />
          </div>
          <div className={classes.pass_case}>
            <label>New Password</label>
            <input type="password" />
          </div>
        </div>
      </div>
    </div>
  );
}
