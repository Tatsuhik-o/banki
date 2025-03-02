import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext, useRef, useEffect } from "react";
import MainCard from "../layouts/accounts/main_card/MainCard";
import TitleCard from "../components/TitleCard";
import Upcoming from "../layouts/accounts/upcoming_bills/Upcoming";
import JustGage from "justgage";
import "raphael/raphael.min.js";

const useStyles = makeStyles({
  accounts: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "3rem 1rem 1rem 1rem",
    gap: (props: { mobileView: boolean }) =>
      !props.mobileView ? "10px" : "15px",
  },
  upcom_card: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 0.5rem",
    flexDirection: (props: { mobileView: boolean }) =>
      !props.mobileView ? "row" : "column",
  },
  debcredove_invoi: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 0.5rem",
    flexDirection: (props: { mobileView: boolean }) =>
      !props.mobileView ? "row" : "column",
  },
  upcom_bills: {
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flex: "2",
    flexDirection: "column",
    gap: "10px",
  },
  main_card: {
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flex: "1",
    flexDirection: "column",
    gap: "10px",
  },
  gauge_container: {
    width: "100%",
    height: "100%",
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  gauge: {
    width: "100%",
    height: "250px",
    background: "#FFFFFF",
    borderRadius: "18px",
    "& svg > path:last-of-type": {
      transform: "translate(-10px, 8px)",
    },
  },
});

export default function Accounts() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  const gaugeRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (gaugeRef.current) {
        new JustGage({
          id: "gauge-container",
          value: 80,
          min: 0,
          max: 100,
          title: "Credit Score",
          label: "Score",
          gaugeColor: "#E7EDFF",
          levelColors: ["#396AFF", "#396AFF", "#396AFF"],
          pointer: true,
          pointerOptions: {
            color: "#000000",
          },
        });
      }
    }, 100);
  }, []);

  return (
    <div className={classes.accounts}>
      <MainCard />
      <div className={classes.upcom_card}>
        <div className={classes.upcom_bills}>
          <TitleCard titleMessage="Upcoming Bills" />
          <Upcoming />
        </div>
        <div className={classes.main_card}>
          <TitleCard titleMessage="Credit Score" />
          <div className={classes.gauge_container}>
            <div
              ref={gaugeRef}
              id="gauge-container"
              className={classes.gauge}
            ></div>
          </div>
        </div>
      </div>
      <div className={classes.debcredove_invoi}></div>
    </div>
  );
}
