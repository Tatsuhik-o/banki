import { makeStyles } from "@mui/styles";
import { mobileContext } from "../../../utils/context";
import { useContext } from "react";
import { currencies } from "../../../utils/constants";
import { timeZones } from "../../../utils/constants";
import Toggle from "../../../components/Toggle";

const useStyles = makeStyles({
  preference: {
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "100%" : "90%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignSelf: "center",
    paddingTop: "1rem",
  },
  currency_timezone: {
    width: "100%",
    display: "flex",
    flexDirection: (props: { mobileView: boolean }) =>
      props.mobileView ? "column" : "row",
    gap: (props: { mobileView: boolean }) =>
      props.mobileView ? "5px" : "45px",
  },
  currency: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    fontFamily: "Source Code Pro",
    padding: "0.5rem",
    "& select": {
      color: "#7A95C3",
      padding: "0.5rem",
      border: "1px solid #E7EFF5",
      borderRadius: "8px",
      cursor: "pointer",
    },
  },
  timezone: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    gap: "3px",
    fontFamily: "Source Code Pro",
    "& select": {
      color: "#7A95C3",
      padding: "0.5rem",
      border: "1px solid #E7EFF5",
      borderRadius: "8px",
      cursor: "pointer",
    },
  },
  notifications: {
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "100%" : "50%",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontFamily: "Source Code Pro",
  },
  notif_group: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  radio: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    color: "#9EB2D3",
    fontSize: "0.8rem",
  },
});

export default function Preference() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });

  return (
    <div className={classes.preference}>
      <div className={classes.currency_timezone}>
        <div className={classes.currency}>
          <label htmlFor="">Currency</label>
          <select name="" id="">
            {currencies.map((currency, idx) => {
              return <option key={idx}>{currency}</option>;
            })}
          </select>
        </div>
        <div className={classes.timezone}>
          <label htmlFor="">Time Zone</label>
          <select name="" id="">
            {timeZones.map((timezone, idx) => {
              return (
                <option
                  key={idx}
                >{`(GMT${timezone.offset}) ${timezone.city}`}</option>
              );
            })}
          </select>
        </div>
      </div>
      <div className={classes.notifications}>
        <label htmlFor="notif_group">Notifications</label>
        <div className={classes.notif_group} id="notif_group">
          <div className={classes.radio}>
            <Toggle isItOn={true} />
            <label>Send or Receive Digital Currency</label>
          </div>
          <div className={classes.radio}>
            <Toggle isItOn={false} />
            <label>Enable Credit Score Overview</label>
          </div>
          <div className={classes.radio}>
            <Toggle isItOn={true} />
            <label>Send or Receive digital currency</label>
          </div>
        </div>
      </div>
    </div>
  );
}
