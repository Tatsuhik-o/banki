import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext } from "react";
import MainCard from "../layouts/accounts/main_card/MainCard";

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
});

export default function Accounts() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.accounts}>
      <MainCard />
      <div className={classes.upcom_card}></div>
      <div className={classes.debcredove_invoi}></div>
    </div>
  );
}
